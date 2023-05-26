const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  env: {
    LANG: 'en',
    USER: '',
    PASS: '',
  },
  e2e: {
    baseUrl: 'https://account.limesurvey.org/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      const browserify = require('@cypress/browserify-preprocessor')
      const PDFDocument = require('pdfkit')
      const blobStream = require('blob-stream')
      const fs = require('fs')

      on('before:run', () => {
        const dir = `./cypress/pdfs/${config.env.LANG}`
        if (!fs.existsSync(dir)) {
          try {
            fs.mkdirSync(dir, { recursive: true })
          } catch (err) {
            console.log(err)
          } finally {
            console.log(
              `Directory /pdfs/${config.env.LANG} created successfully`
            )
          }
        }
      })

      on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.args.push('--force-color-profile=srgb')
        launchOptions.args.push('--disable-low-res-tiling')
        launchOptions.args.push('--disable-smooth-scrolling')

        return launchOptions
      })

      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })

      on('task', {
        imgToPdf({ path, rotate }) {
          try {
            const width = rotate ? 1080 : 1920
            const height = rotate ? 1920 : 1080
            const fitX = rotate ? 864 : 1536
            const fitY = rotate ? 1536 : 864
            const doc = new PDFDocument({ size: [width, height] })
            const stream = doc.pipe(blobStream())
            doc.image(path, {
              fit: [fitX, fitY],
              align: 'center',
              margins: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            })
            doc.end()
            stream.on('finish', function () {
              const blob = stream.toBlob('application/pdf')
              const pathArray = path
                .replace('screenshots', 'pdfs')
                .replace('png', 'pdf')
                .split('/')
              pathArray.splice(8, 1, config.env.LANG)
              blob.arrayBuffer().then((arrayBuffer) => {
                const path = pathArray.join('/')
                fs.writeFile(
                  path,
                  Buffer.from(arrayBuffer, 'binary'), // eslint-disable-line no-undef
                  (err) => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log(`File ${path} written successfully`)
                    }
                  }
                )
              })
            })
          } catch (err) {
            console.log(err)
            return err
          } finally {
            return 'success' // eslint-disable-line no-unsafe-finally
          }
        },
      })

      on('file:preprocessor', browserify())
    },
  },
})
