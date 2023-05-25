describe('TM02 Login', () => {
  it('TM02.1 Login email - username', function () {
    cy.visit(Cypress.env('LANG'))
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.2 Forgot password', function () {
    cy.visit(Cypress.env('LANG'))
    cy.get('.link-register a').eq(0).click()
    cy.get('.fa-user-shield').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.3 Forgot username', function () {
    cy.visit(Cypress.env('LANG'))
    cy.get('.link-register a').eq(1).click()
    cy.get('.fa-user-shield').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.4 2 factor page', function () {
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER'), Cypress.env('PASS'))
    cy.get('#users-mfa-captive-button-submit').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.5 Confirmation email sent', function () {
    cy.visit(Cypress.env('LANG'))
    cy.get('.link-register a').eq(0).click()
    cy.get('#jform_email').type('tester@testing.de')
    cy.get('button[type="submit"]').click()
    cy.get('#system-message-container').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.6 select 2 factor auth method', function () {
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER'), Cypress.env('PASS'))
    cy.get('#users-mfa-captive-button-submit').should('be.visible')
    cy.get(
      `a[href="${
        Cypress.env('LANG') == 'en' ? '' : '/' + Cypress.env('LANG')
      }/?view=captive&task=select"]`
    ).click()
    cy.get('img[alt="Verification code"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM02.7 backup codes', function () {
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER'), Cypress.env('PASS'))
    cy.get('#users-mfa-captive-button-submit').should('be.visible')
    cy.get(
      `a[href="${
        Cypress.env('LANG') == 'en' ? '' : '/' + Cypress.env('LANG')
      }/?view=captive&task=select"]`
    ).click()
    cy.get('img[alt="Backup Codes"]').click()
    cy.get('#users-mfa-code').should('be.visible')
    cy.wait(1000)
    cy.screenshot()
  })
})
