const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const profilePage = new ProfilePage()
let len;
describe('', () => {
  When('User logins Savvas as a Teacher with valid username and password11', () => {
    bs.savvasLogin('MSuite49win10chrome_teacher04', 'testing123$')
  })
  And('User Hover on Classes subnav', () => {
    cy.get('.header__navbar').shadow().find('[data-id="classes"]').realHover()
   
  })
  Then('User verifies new class details page is not displayed', () => {
    cy.get('[class="clearfix onHoverClass"]').should('be.visible')
  })
  And('User Click on any classes displayed in class list popup modal', () => {

    cy.get('[class="class-card"]').then((data) => {
      len = data.length;
      cy.log(len)
      var randomNumber = Math.floor(Math.random() * len) + 1;
      cy.log("RandomNumber : " + randomNumber);
      cy.get('[class="class-card"]').eq(randomNumber).click()
    })

  })
  Then('User verifies new class details page is not displayed', () => {

  })
})