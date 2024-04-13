/// <reference types="cypress" />

describe('example to-do app', () => {

    beforeEach (() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    })
 
    it ("test 1 - test uncheked", () => {
      cy.get("[type='checkbox']").last().should("be.checked");
      cy.get("[type='checkbox']").last().uncheck();
      cy.get("[type='checkbox']").should("not.be.checked");
      })

    it ("test 2 - test to be checked", () => {
      cy.get("[type='checkbox']").first().check();
      cy.get("[type='checkbox']").should("be.checked");
        })

    }) 
