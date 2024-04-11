/// <reference types="cypress" />

describe('example to-do app', () => {
 
  it.skip ("then", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input#username').type('432432');
    cy.get('input#password').type('432432');
    cy.get('button[type="submit"]').click();
    const message = cy.get('h2').invoke('text').then((text => {
      cy.log(text);
    }));
    cy.log('log text' +message);
    })

    it.skip("invoke", () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('input#username').type('432432');
      cy.get('input#password').type('432432');
      cy.get('button[type="submit"]').click();
      //cy.get('#flash').invoke("hide");
      //cy.wait(5000);
      //cy.get('#flash').invoke('show');
      cy.get('h2').invoke("text").should('eq' , 'Login Page');
      })

      it.skip ("wrap", () => {
        const message = "test message";
        cy.wrap(message).should('contain', 'message');
        cy.wrap(message).should('contain', 'test');
        cy.wrap(message).should('eq', 'test message');
        cy.wrap(message).should('have.lehgth', 12);
        })
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('h2').invoke("text").then((text => {
          const newText = text.toUpperCase();
          cy.wrap(newText).should('eq', 'LOGIN PAGE');
        }))

        it.skip("wrap2", () => {
          cy.visit('https://the-internet.herokuapp.com/login');
          cy.get('input').its('lehgth').should('eq', 2);
          
          const obj = {
            name: "Elly",
            phone: "3333-3333",
            country: "Ukraine"
          }
          cy.wrap(obj).its('name').should('eq', "Hello");
          })

          it ("each", () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('input#username').type('432432');
            cy.get('input#password').type('432432');
            cy.get('input').each(($el) => {
              cy.log($el.value());
            })
      })
    })
  

