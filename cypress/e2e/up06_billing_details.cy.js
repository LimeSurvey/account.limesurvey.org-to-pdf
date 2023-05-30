describe('UP06 Billing details', () => {
  it('UP06 Billing details', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#account li').eq(1).click()
    cy.get('#billing_profile').should('be.visible')
    cy.wait(1000)
    cy.screenshot({
      blackout: [
        '#profile-address-cont div:nth(3)',
        '#profile-address-cont div:nth(4)',
        '#profile-address-cont div:nth(5)',
        '#profile-address-cont div:nth(6)',
        '#profile-address-cont div:nth(7)',
        '#profile-address-cont div:nth(9)',
        '#profile-address-cont div:nth(11)',
      ],
    })
  })
})
