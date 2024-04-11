/// <reference types="cypress" />

describe('example to-do app', () => {
 
    it ("facebook", () => {
      cy.visit ('https://qauto.forstudy.space/' , {
        auth: {
           username: 'guest',
           password: 'welcome2qauto' ,
       },
        })
        cy.get('div.socials').children('[href="https://www.facebook.com/Hillel.IT.School"]').invoke("attr", "href").should("exist");

      })
  
    it ("telegram", () => {
        cy.visit ('https://qauto.forstudy.space/' , {
          auth: {
             username: 'guest',
             password: 'welcome2qauto' ,
         },
          })
          cy.get('div.socials').children('[href="https://t.me/ithillel_kyiv"]').invoke("attr", "href").should("exist");
        })
  
      it ("youtube", () => {
        cy.visit ('https://qauto.forstudy.space/' , {
          auth: {
             username: 'guest',
             password: 'welcome2qauto' ,
         },
          })
          cy.get('div.socials').children('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').invoke("attr", "href").should("exist");
        })
  
      it ("instagram", () => {
        cy.visit ('https://qauto.forstudy.space/' , {
          auth: {
             username: 'guest',
             password: 'welcome2qauto' ,
         },
          })
          cy.get('div.socials').children('[href="https://www.instagram.com/hillel_itschool/"]').invoke("attr", "href").should("exist");
        })
  
      it ("linkedin", () => {
        cy.visit ('https://qauto.forstudy.space/' , {
          auth: {
             username: 'guest',
             password: 'welcome2qauto' ,
         },
          })
          cy.get('div.socials').children('[href="https://www.linkedin.com/school/ithillel/"]').invoke("attr", "href").should("exist");
        })


        it("Sign In Form" , () => {
          cy.visit ('https://qauto.forstudy.space/' , {
            auth: {
               username: 'guest',
               password: 'welcome2qauto' ,
           },
        })
        cy.get('button.header_signin').click();
        cy.get(".modal-title").invoke('text').should('eq', "Log in");
      })
      
      it("Sign Up Form" , () => {
        cy.visit ('https://qauto.forstudy.space/' , {
          auth: {
             username: 'guest',
             password: 'welcome2qauto' ,
         },
      })
      cy.get('button.btn-primary').click();
      cy.get(".modal-title").invoke('text').should('eq', "Registration");
    })




      })