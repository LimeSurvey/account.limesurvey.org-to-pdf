describe('TM04 Other pages', () => {
  it('TM04.1 References', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.item-7312 a').click()
    cy.get('.fa-clock').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
