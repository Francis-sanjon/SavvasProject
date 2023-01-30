const {When, And} = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
const bs = new BaseClass();


describe('',()=>{
    When('User Logins Savvas as Admin user',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        bs.savvasLogin('realize_admin2', 'savvas@123')
    })
   
    And('User clicks on any Program in My Program section',()=>{
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        cy.log(randomNumber);
        cy.get('[class="program-row_list_image"]').eq(randomNumber).click()
    })
    And('User verifies new TOC page is displayed or not',()=>{
        cy.get('.title-bar_title > [tabindex="-1"]').then((data) => {
            let TOC = data.text()
            expect(TOC).to.eq(' Table of Contents ')
        })
    })


})