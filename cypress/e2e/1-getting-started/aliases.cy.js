/// <reference types="cypress" />

describe('example to-do app', () => {
 
    beforeEach (() => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('input#username').as('userNameField');
      cy.get('input#userpassword').as('passwordField');
    
      cy.wait(40000);
      })

      it("login with correct creds", () => {
        cy.get('@userNameField').type('tomsmith');
        cy.get('@passwordField').type('SuperSecretPassword!{enter}' );
        cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
        })

        it("alias 2", () => {
            cy.get('@userNameField').type('test2');
            cy.get('@userNameField').should('have.value', 'test2');
            })

            it("alias 3", () => {
                cy.get('@userNameField').type('test3');
                cy.get('@userNameField').should('have.value', 'test4');
                })

                it("alias 4", () => {
                    cy.get('@userNameField').type('test4');
                    cy.get('@userNameField').should('have.value', 'test4');
                    })
    })