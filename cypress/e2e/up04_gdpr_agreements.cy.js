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

  it('UP04.2 Create agreement', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#users-gdpr-custom a').click()
    cy.get('#t4-main-body a').eq(0).click()
    cy.get('#selector__gdpr_generator_start').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('UP04.3 Preview agreement', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#users-gdpr-custom a').click()
    cy.get('#t4-main-body a').eq(0).click()
    cy.get('#selector__generate_gdpr').click()
    cy.get('#selector__gdpr_generator_preview').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('UP04.4 Withdraw agreement', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#users-gdpr-custom a').click()
    cy.get('#selector__gdpr_document_withdraw').click()
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })
})
