/// <reference types="cypress" />
describe('example to-do app', () => {

    it("first test", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
        cy.get('.icon-facebook').parent().invoke('removeAttr', 'target').click();
        cy.origin('https://www.facebook.com/', () => {
            cy.get('a[aria-label="Facebook"]').should('be.visible');
        })



    })

})
