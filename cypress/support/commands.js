import Home from 'cypress\e2e\PageObject\01_Home.spec.js'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>


require('../support/commands')

Cypress.on('uncaught:exception', (err, runnable, promise) => {
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case
  if (promise) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})


Cypress.Commands.add('setOrigin', "https://nightly-www.savvasrealizedev.com", () => {
  return 'https://nightly-www.savvasrealizedev.com';
});


Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task('parseXlsx', { filePath: inputFile })
});




Cypress.Commands.add('savvasLogin', (username, password) => {
  const lp = new LoginPage()
  cy.get('#username').type(username)
  cy.get('#password').type(password)
})
