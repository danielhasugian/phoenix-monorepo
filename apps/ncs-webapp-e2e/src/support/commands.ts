/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(username: string, password: string): void;
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  console.log('Custom command example: Login', username, password)

  cy.visit({ url: '/login', failOnStatusCode: false})
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.get('input[id="inputUsername"]').type(username)
  cy.get('input[id="inputPassword"]').type(password)
  cy.get('button[id="buttonLogin"]').click()
})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
