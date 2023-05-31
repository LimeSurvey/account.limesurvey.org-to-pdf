const randomString = (length) => {
  return Array(length)
    .fill(0)
    .map(() => Math.random().toString(36).charAt(2))
    .join('')
}

const getIframeDocument = () => {
  return cy.get('iframe').its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  return getIframeDocument()
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap)
}

module.exports = {
  randomString,
  getIframeBody,
}
