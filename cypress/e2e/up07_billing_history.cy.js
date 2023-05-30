describe('UP07 Billing history', () => {
  it('UP07 Billing history', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#account li').eq(2).click()
    cy.get('#nbill-order-list-table-and-invoices').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
