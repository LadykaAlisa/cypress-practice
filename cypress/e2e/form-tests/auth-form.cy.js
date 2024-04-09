/// <reference types="cypress" />

describe('example to-do app', () => {
 
    it ("test 1", () => {
      cy.visit('/login');
      cy.get('input#username').type('tomsmith');
      cy.get('input#password').type('Super');
      cy.get('button[type="submit"]').click();
      cy.get('div#flash').should('have.text' , '\n            Your password is invalid!\n            ×\n          ');
      })
     
    it ("test 2", () => {
        cy.visit('/login');
        cy.get('input#username').type('tom');
        cy.get('input#password').type('Super');
        cy.get('button[type="submit"]').click();
        cy.get('div#flash').should('have.text' , '\n            Your password is invalid!\n            ×\n          ');
        })

        it ("test 3", () => {
            cy.visit ('https://qauto.forstudy.space/' , {
         auth: {
            username: 'guest',
            password: 'welcome2qauto' ,
        },
         })
            cy.get('button.btn-primary').should('have.text', 'Sign up');
            })

        })