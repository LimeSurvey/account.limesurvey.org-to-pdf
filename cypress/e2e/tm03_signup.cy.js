const { randomString } = require('../support/common')
const r = randomString(8)

describe('TM03 Signup', () => {
  it('TM03.1a Sign up', function () {
    cy.visit(Cypress.env('LANG'))
    cy.get('.login a').eq(0).click()
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM03.1b Sign up success', function () {
    cy.task('log', `Creating user: tp.limesurvey${r}`)
    cy.visit(Cypress.env('LANG'))
    cy.get('.login a').eq(0).click()
    cy.get('#jform_username').type(`tp.limesurvey${r}`)
    cy.get('#jform_password1').type(`aB3${r}`)
    cy.get('#jform_email1').type(`tibor.pacalat.limesurvey+${r}@gmail.com`)
    cy.get('button[type="submit"]').click()
    cy.get('#system-message-container').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
