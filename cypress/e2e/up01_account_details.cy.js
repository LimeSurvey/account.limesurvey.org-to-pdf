describe('UP01 Account details', () => {
  it('UP01.1 Account details (existing user)', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.wait(1000)
    cy.screenshot()
  })

  it('UP01.2 Account details (new user)', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER3'), Cypress.env('PASS3'))
    cy.wait(1000)
    cy.screenshot()
  })

  it('UP01.3 Edit survey site URL', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(0).click()
    cy.get('#installationform').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP01.4 Create survey site', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER3'), Cypress.env('PASS3'))
    cy.get('#application a').click()
    cy.get('#jform_subdomain').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP01.5 Edit domain alias without expert package', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(1).click()
    cy.get('#installationform').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP01.6 Edit storage reminder', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(2).click()
    cy.get('#installationform').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP01.7 Edit response reminder', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(3).click()
    cy.get('#installationform').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP01.8 Reset admin password', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(4).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it.only('UP01.9 Delete survey site', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#deleteinstallationform a').click()
    cy.get('button.uk-button-danger').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
