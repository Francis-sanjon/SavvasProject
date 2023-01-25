import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../PageObject/LoginPage.spec";
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const home = new Home();
const profilePage = new ProfilePage()

describe('', () => {
    let str;
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
        home.getSetting().click()
    })
    Then('User Verify the first name displayed in the profile Icon', () => {
        /*  var element = document.getElementById("studentName");

        // Get the text from the element
        var text = element.innerText;

        // Log the text to the console
        cy.log(text);
      
              cy.get('#studentName').then(($first) => {
                  const firstValue = $first.val()
                  cy.get('.header__navbar_student').shadow().find('.profile-container-wrapper').then(($second) => {
                      const secondValue = $second.val()
                      expect(firstValue).to.eq(secondValue)
                  })
              })*/

        const str = cy.get('#studentName').then((data) => {
            let firstLastName = data.text().toString()
            let firstName = firstLastName.split(" ")[0];
            cy.log(firstName)
        })

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