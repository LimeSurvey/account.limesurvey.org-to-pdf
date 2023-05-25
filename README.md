# account.limesurvey.org to PDF

This is the home of automation that produces screenshots of all views/pages of ```account.limesurvey.org``` and converts them into PDFs.
Developed with [Cypress.io](https://www.cypress.io/)

## Prerequisites

* [Node.js](https://nodejs.org/en)
* [Yarn](https://yarnpkg.com/)

## Local Setup

To install dependencies run ```yarn```

## How to use it

* ```CYPRESS_LANG=hr CYPRESS_USER=your.user@limesurvey.org CYPRESS_PASS=your.password yarn cypress:e2e:run ``` - start the app for croatian language (you ned to provide valid credentials)

* ```yarn cypress:e2e:run --spec cypress/e2e/tm02_login.cy.js``` - run tests from specific file
