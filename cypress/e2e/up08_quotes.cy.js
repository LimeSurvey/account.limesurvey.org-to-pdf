describe('UP08 Quotes', () => {
  it('UP08 Quotes', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#account li').eq(3).click()
    cy.get('#nbill-quote-list-table').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
