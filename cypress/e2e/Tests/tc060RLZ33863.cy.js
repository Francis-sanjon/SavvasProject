import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const home = new Home()
const classesPage=new ClassesPage()
const profilePage = new ProfilePage()
describe('', () => {

  When('User enters valid username and password5', () => {
    cy.viewport(1280, 720)
    bs.savvasLogin('MSuite49win10chrome_teacher05', 'testing123$')
  })
  Then('User verifies Class name should be displayed on each of my cards', () => {
       home.getClassCardTitle().should('be.visible')
  })
  Then('User verifies Background each of myCards', () => {
    cy.get('[class="row classHeader"]').should('not.have.css', 'color', 'rgb(0, 0, 0)')
  })
  Then('class picture set on each class card', () => {
    cy.get('[class="classImage"]').should('be.visible')
  })
  Then('User verifies Square class cards is displayed two in a row or not', () => {
    cy.get('.classInfiniteScroll').scrollTo('0%', '100%')
    home.getClassContainer().scrollTo('0%', '100%')
    cy.get('[class="classImage"]').its('length')
      .then(length => {
        // Do something with the length
        cy.log(length)
        cy.log("Locators lengh=th :" + cy.get('[class="classImage"]'))
      })
    //cy.get('[class="classImage"]').should('have.length.greaterThan', 3)
    home.getClassCardImage().should('have.length.greaterThan', 3)
    //cy.get('[class="h-100 pr-0 className col-9"]').eq(0).should('have.attr', 'style', 'max-width: 456px;')

  })
  Then('User verifies Original picture "Assignments","Discuss","Programs" fill the whole container or not', () => {
    profilePage.getAssignments().should('be.visible')
    profilePage.getStudentsGroups().should('be.visible')
    profilePage.getPrograms().should('be.visible')
  })
  And('User Click the "Pen and Paper" icon', () => {
    profilePage.getAssignments().click()
    cy.wait(5000)
  })
  Then('User verifies which navigating to Assignment listing page or not', () => {
    classesPage.getAssignmentPage().should('be.visible')

  })
  And('User navigating to home page', () => {
    cy.go('back')
  })
  And('User Click the "People" icon', () => {
    profilePage.getStudentsGroups().click()
  })
  Then('User verifies which navigating to Class Discussions page for that class or not', () => {
    classesPage.getPeopleLabel().should('be.visible')
  })


  /*And('User Click the "Graph" icon', () => {
    profilePage.getData.click()
 
  Then('User verifies that link navigated to the Class Results by Assignment page for that class or not', () => {
    profilePage.getGraphLabel().should('be.visible')

  }) })*/



  And('User Click the "Book" icon Dropdown', () => {
    profilePage.getPrograms().click()
  })
  Then('User verifies that display the programs associated with the class', () => {
    cy.get('[class="dropdown-text"]').should('be.visible')

  })

})