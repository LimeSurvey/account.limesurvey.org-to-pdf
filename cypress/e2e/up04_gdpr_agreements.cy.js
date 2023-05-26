describe('UP04 GDPR agreements', () => {
  it('UP04.1 View agreements', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#users-gdpr-custom a').click()
    cy.get('table.uk-table-striped').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
