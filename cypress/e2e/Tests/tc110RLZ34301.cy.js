import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../PageObject/LoginPage.spec";
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const home = new Home();
const profilePage = new ProfilePage()
var str;
describe('', () => {

    // cy.on('uncaught:exception', (err, runnable) => {
    // handling of exception
    //});
    When('Teacher enters valid username and password-3', () => {
        bs.savvasLogin('stud1_test01', 'testing123$')
    })
    Then('User Verify profile is visible or not', () => {
        home.getProfileIcon().should('be.visible')
    })
    And('User clicks profile Icon', () => {
        home.getProfileIcon().click()
    })
    And('User clicks Setting Icon', () => {
        cy.get('.header__navbar_student').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="settings"]').click()
        //home.getSetting().click()
    })
    Then('User Verify the first name displayed in the profile Icon', () => {
        
       

              cy.get('#studentName').then(($first) => {
                  const Value = $first.text()
                  let firstValue = Value.split(" ")[0];
                  cy.get('.header__navbar_student').shadow().find('[class="platform__navbar--profileUtility hydrated"]').shadow().find('[class="utility__item--userName"]').then(($second) => {
                      const secondValue = $second.text()
                      
                      expect(firstValue).to.eq(secondValue)
                      cy.log(firstValue)
                      cy.log(secondValue)
                      str=firstValue.toString();
                     // expect(firstValue).to.eq(secondValue)
                  })
              })
       
/*
        const str = cy.get('#studentName').then((data) => {
            let firstLastName = data.text().toString()
            let firstName = firstLastName.split(" ")[0];
            cy.log(firstName)
        })
*/
    })
    And('user clicks Home Button', () => {
        profilePage.getHomeMenu().click()
    })
    And('user clicks Browse Button', () => {
        profilePage.getBrowseMenu().click()
    })
    And('User clicks Classes Menu', () => {
        profilePage.getClaasesMenu().click()
    })
    And('User clicks Grades Menu', () => {
        profilePage.getGradesMenu().click()
    })



















})