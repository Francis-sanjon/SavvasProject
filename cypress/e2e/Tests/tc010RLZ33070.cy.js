
import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const profilePage = new ProfilePage()
const classesPage=new ClassesPage()

describe('', () => {
  When('User logins Savvas as a Teacher with valid username and password6', () => {
    cy.viewport(1280, 720)
    bs.savvasLogin('MSuite49win10chrome_teacher05', 'testing123$')
  })
  Then('User verifies rectangular class cards is displayed one in a row or not', () => {

    cy.get('[class="classImage"]').should('have.length.lessThan', 4)
    cy.get('[class="h-100 pr-0 className col-9"]').eq(0).should('have.attr', 'style', 'max-width: 725px;')

  })
  Then('User verifies "Class avatar" with equivalent icon and label,Assignment,Student & Groups,Graph,Programs', () => {
    profilePage.getAssignments().should('be.visible')
    profilePage.getStudentsGroups().should('be.visible')
    profilePage.getPrograms().should('be.visible')
  })
  Then('User verifies that link navigated to the Class Results by Assignment page for that class or not', () => {
    classesPage.getAssignmentPage().should('be.visible')

  })
  Then('User verifies that link navigated to the Student & Group page for that class or not', () => {
    classesPage.getPeopleLabel().should('be.visible')
  })
  And('User Click the "Graph" icon', () => {
    profilePage.getData().click()
  })
  Then('User verifies that link navigated to the Class Results by Data page for that class or not', () => {
    cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]').should('be.visible')
  })
  Then('User verifies Dropdown that contains the programs associated with that class should be expanded or not', () => {
    cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]').should('be.visible')
  })

})


