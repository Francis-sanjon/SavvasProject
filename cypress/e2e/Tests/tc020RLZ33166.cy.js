const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/01_Home.spec'
import ProfilePage from '../PageObject/ProfilePage.spec'
import BaseClass from "../PageObject/BaseClass.spec";
const home = new Home();
const bs = new BaseClass();
const profilePage = new ProfilePage()

describe('Suite2', () => {
    // cy.on('uncaught:exception', (err, runnable) => {
    // handling of exception
    //});
    And('Teacher clicks profile Icon', () => {
        cy.get('.header__navbar').shadow().find('.profile-container-wrapper').click()
        //home.getProfileIcon().click()
    })
    And('Teacher clicks Setting option', () => {
        // bs.resetLanguage()

        let condition = '';
        home.getSetting().then((data) => {
            let condition = data.text()
            cy.log(condition)
            if (condition !== 'Settings') {
                home.getSetting().should('have.text', 'Configuración').click()

                profilePage.getPreparedLanguage().click()
                cy.get('.ng-binding').eq(21).click()
                profilePage.getSaveBtn().click()
                cy.wait(10000)
                profilePage.getRealizeImg().click()
                cy.get('.header__navbar').shadow().find('.profile-container-wrapper')
                // home.getprofileIcon().click()
            }

        })

        home.getSetting().should('have.text', 'Settings').click()
        cy.wait(15000);
    })
    Then('Verify Setting page', () => {
        cy.url().should('include', 'profile')
    })
    When('Teacher Selects spanish language', () => {
        profilePage.getPreparedLanguage().click()
        profilePage.getSpanish().click()
    })
    And('clicks Save Button', () => {
        profilePage.getSaveBtn().click()
        cy.wait(10000)
    })
    And('Teacher clicks savvas Realize Icon to go Dashboard page', () => {
        profilePage.getRealizeImg().click()
    })
    Then('Teacher Verify the below data', () => {
        profilePage.getStudentsGroups().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Estudiantes y grupos ')
        })
        profilePage.getData().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Datos ')
        })
        profilePage.getAssignments().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Asignaciones ')
        })
        profilePage.getPrograms().then((data) => {
            let value = data.text()
            cy.log(value)
        })
    })
    And('Teacher clicks Setting', () => {

        home.getSetting().click()
    })
    When('Teacher Selects English language', () => {
        profilePage.getPreparedLanguage().click()
        profilePage.getEnglish().click()
    })

})
