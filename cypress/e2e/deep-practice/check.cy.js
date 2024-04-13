/// <reference types="cypress" />
describe('checkboxes, radio buttons', () => {

    it("checkboxes", () => {
        cy.visit('https://practice.expandtesting.com/checkboxes');
        cy.get('#checkbox1').check();
        cy.wait(2000);
        cy.get('[type="checkbox"]').uncheck();
        cy.wait(2000);
        cy.get('[type="checkbox"]').check();

        cy.get('#checkbox1').should('be.checked');
        cy.get('#checkbox2').should('be.checked');
        cy.get('[type="checkbox"]').should('be.checked');

    })

    it.only("radio buttons", () => {
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.get('#red').check();
        cy.wait(2000);
        cy.get('input[type="radio"]').check('yellow');
        cy.get('#yellow').should('be.checked');
        cy.get('#red').should('not.be.checked');
    })

})
