const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
const bs = new BaseClass();

describe('',()=>{
 
    
    When('User Logins Savvas as Student user',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        bs.savvasLogin('rght149390_stud05', 'testing123$')
    })
    Then('User Verify if scroll bar is not displayed in My Programs section',()=>{
  
       cy.get('.d-none > programs-list > .programs-list').should('be.visible')
            cy.get('.d-none').should('have.css', 'overflow-y', 'scroll')
               cy.get('[class="program-row_list_image"]').should('have.length.above',4)
        
    })
    























})