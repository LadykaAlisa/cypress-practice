/// <reference types="cypress" />
describe('dropdowns', () => {

    it("dropdown select", () => {
        cy.visit('https://practice.expandtesting.com/dropdown');
        cy.get('select#country').select('AL');
        cy.get('select#country').select('Bermuda');
        cy.get('select#country').select(12);
        cy.get().select(['',''])

        cy.get('select#country').should('have.value', 'AM');
        cy.get('select#country option:selected').should('have.text', 'Armenia');
    })

    it.only("dropdown div", () => {
        cy.visit('http://127.0.0.1:5500/system-under-test/custom-dropdown.html');
        cy.selectCustomDropdown('#myDropdown', 'Option 2');

    })



})
