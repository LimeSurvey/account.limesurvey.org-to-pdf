describe('UP03 General preferences', () => {
  it('UP03.1 Edit time zone', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(9).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP03.2 Edit communication language', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(10).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })
})
