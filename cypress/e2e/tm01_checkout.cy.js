const { getIframeBody } = require('../support/common')

describe('TM01 Checkout', () => {
  it('TM01.1 Checkout', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env(
        'LANG'
      )}/nbill?action=orders&task=order&cid=26&package=basic`
    )
    cy.wait(1000)
    cy.get('#ctl_931').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.1.1 New order Comfort Update', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env('LANG')}/nbill?action=orders&task=order&cid=29&package=DD`
    )
    cy.wait(1000)
    cy.get('#ctl_1039').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.1.2 New quote ComfortUpdate', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(`${Cypress.env('LANG')}/nbill?action=quotes&task=order&cid=31`)
    cy.wait(1000)
    cy.get('#ctl_1123').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.1.3 Donation', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(`${Cypress.env('LANG')}/nbill?action=orders&task=order&cid=27`)
    cy.wait(1000)
    cy.get('#ctl_959').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.1.4 Yearly-renewal Cloud', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env(
        'LANG'
      )}/nbill?action=orders&task=order&cid=29&package=enterprise`
    )
    cy.wait(1000)
    cy.get('#ctl_1039').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.1.5 Payment Type: Sepa', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env(
        'LANG'
      )}/nbill?action=orders&task=order&cid=26&package=basic`
    )
    cy.wait(1000)
    cy.get('[data-method="sepa"]').click()
    cy.get('.nbill_form_input[type=checkbox]').check({ force: true })
    cy.get('.order-1 [type=submit]').click()
    cy.wait(3000)
    getIframeBody()
      .find('#email')
      .then(($element) => {
        $element.css('background-color', 'black')
        $element.css('color', 'black')
      })
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM01.1.6 Payment Type: Credit card', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env(
        'LANG'
      )}/nbill?action=orders&task=order&cid=26&package=basic`
    )
    cy.wait(1000)
    cy.get('[data-method="visa"]').click()
    cy.get('.nbill_form_input[type=checkbox]').check({ force: true })
    cy.get('.order-1 [type=submit]').click()
    cy.wait(3000)
    getIframeBody()
      .find('#email')
      .then(($element) => {
        $element.css('background-color', 'black')
        $element.css('color', 'black')
      })
    cy.wait(1000)
    cy.screenshot()
  })

  it('TM01.2 Quotes', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(
      `${Cypress.env(
        'LANG'
      )}/nbill?view=nbill&action=quotes&task=order&cid=30&package=basic`
    )
    cy.wait(1000)
    cy.get('#ctl_1087').click()
    cy.get('[name="ctl_NBILL_CORE_company_name"]').should('be.visible')
    cy.wait(1000)
    cy.screenshot({ blackout: ['input[type="email"]'] })
  })

  it('TM01.3 Thank you', function () {
    cy.viewport(1220, 1100)
    cy.visit(Cypress.env('LANG'))
    cy.login(Cypress.env('USER2'), Cypress.env('PASS2'))
    cy.visit(`${Cypress.env('LANG')}/quotation_landing`)
    cy.wait(1000)
    cy.screenshot()
  })
})
