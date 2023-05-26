// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => {
  return false
})

let screenshotPath
let rotate

Cypress.Screenshot.defaults({
  onAfterScreenshot($el, props) {
    screenshotPath = props.path
    if (props.dimensions.width < props.dimensions.height) {
      rotate = true
    } else {
      rotate = false
    }
  },
})

afterEach(() => {
  cy.task('imgToPdf', { path: screenshotPath, rotate }).then((result) => {
    console.log(result)
  })
  cy.wait(1000)
})
