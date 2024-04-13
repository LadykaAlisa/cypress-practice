/// <reference types="cypress" />

describe('example to-do app', () => {

    beforeEach (() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    })
 
    it ('test 1 - default value on select', () => {
      cy.get('select#dropdown option:selected').should('have.text' , "Please select an option");
      })

      it ("test 2 - select option 2", () => {
        cy.get('select#dropdown').select("Option 2");
        cy.get('select#dropdown option:selected').should('have.text' , "Option 2");
        })

    })