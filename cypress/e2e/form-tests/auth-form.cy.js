/// <reference types="cypress" />

describe('example to-do app', () => {
 
    it ("test 1", () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('input#username').type('tomsmith');
      cy.get('input#password').type('Super');
      cy.get('button[type="submit"]').click();
      cy.get('div#flash').should('have.text' , '\n            Your password is invalid!\n            ×\n          ');
      })
    })