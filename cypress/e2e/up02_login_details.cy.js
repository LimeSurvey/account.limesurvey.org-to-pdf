describe('UP02 Login details', () => {
  it('UP02.1 Edit name', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(5).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport', blackout: ['.email1'] })
  })

  it('UP02.3 Edit password', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(6).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport', blackout: ['.email1'] })
  })

  it('UP02.4 Edit email', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(7).click()
    cy.get('#modal').should('be.visible')
    cy.get('.uk-modal-dialog').invoke('css', 'position', 'absolute')
    cy.wait(1000)
    cy.screenshot({
      capture: 'viewport',
      blackout: ['.dd.email1', 'input[type="email"]'],
    })
  })

  it('UP02.5 Edit 2FA', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(8).click()
    cy.get('#modal').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP02.6 Delete my account', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('#formSoftDeleteUserContainer a').click()
    cy.get('#delete-account').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ capture: 'viewport' })
  })

  it('UP02.7 Add verification code', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(8).click()
    cy.get('#modal').should('be.visible')
    cy.get('#modal a').eq(1).click()
    cy.get('#com-users-method-edit-title').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('UP02.8 Add Yubikey', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.get('.column-edit a').eq(8).click()
    cy.get('#modal').should('be.visible')
    cy.get('#modal a').eq(2).click()
    cy.get('#com-users-method-edit-title').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
