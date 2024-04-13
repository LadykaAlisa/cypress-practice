/// <reference types="cypress" />

//IMPORT
// import userData from '../../fixtures/credentials.json'

// describe('fixtures', () => {

//     it("first test", () => {
//         cy.visit('https://qauto.forstudy.space', {
//             auth: {
//                 username: 'guest',
//                 password: 'welcome2qauto',
//             },
//         })

//         cy.contains('Sign In').click();
//         cy.get('h4.modal-title').should('be.visible');
//         cy.get('input#signinEmail').type(userData.username);
//         cy.get('input#signinPassword').type(userData.password);
//         cy.contains('Login').click();
//         cy.get('p.alert-danger').should('have.text', 'Wrong email or password');


//     })

// })

//THEN
// describe('fixtures', () => {

//     it("first test", () => {
//         cy.visit('https://qauto.forstudy.space', {
//             auth: {
//                 username: 'guest',
//                 password: 'welcome2qauto',
//             },
//         })

//         cy.fixture('credentials.json').then((userData) => {
//             cy.contains('Sign In').click();
//             cy.get('h4.modal-title').should('be.visible');
//             cy.get('input#signinEmail').type(userData.username);
//             cy.get('input#signinPassword').type(userData.password);
//             cy.contains('Login').click();
//             cy.get('p.alert-danger').should('have.text', 'Wrong email or password');

//         })




//     })

// })

describe('fixtures', () => {

    let userData;

    beforeEach(() => {
        cy.fixture('credentials.json').then((data) => {
            userData = data;
        })
    })

    it("first test", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })

        cy.fixture('credentials.json').then((userData) => {
            cy.contains('Sign In').click();
            cy.get('h4.modal-title').should('be.visible');
            cy.get('input#signinEmail').type(userData.username);
            cy.get('input#signinPassword').type(userData.password);
            cy.contains('Login').click();
            cy.get('p.alert-danger').should('have.text', 'Wrong email or password');

        })




    })

})
