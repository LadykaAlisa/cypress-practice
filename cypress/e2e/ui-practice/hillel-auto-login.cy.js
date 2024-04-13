/// <reference types="cypress" />

describe('example to-do app', () => {
 
    it("Auth user and visible garage page", () => {
        cy.fixture("auth.json").then(user => {
            cy.visit ('https://qauto.forstudy.space/' , {
                auth: {
                   username: 'guest',
                   password: 'welcome2qauto' ,
               },
            })
            cy.get('button.header_signin').click();
            cy.get("#signinEmail").type(user.email);
            cy.get("#signinPassword").type(user.password);
            cy.get(".btn-primary").contains("Login").click();
            cy.url().should("include", "/garage");
            });
        });
    });
    