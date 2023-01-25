class ProfilePage {
   getPreparedLanguage() {
      return cy.get('#languageDropdown')
   }
   getSpanish() {
      return cy.get('.ng-binding').eq(22)
   }
   getEnglish() {
      return cy.get('.ng-binding').eq(21)
   }
   getSaveBtn() {
      return cy.get('[data-e2e-id="save"]').eq(1)
   }
   getRealizeImg() {
      return cy.get('.header__navbar').shadow().find('#platformNavLogo')
   }
   getAssignments() {
      return cy.get('[class="gridCard__text"]').eq(0)
   }
   getStudentsGroups() {
      return cy.get('[class="gridCard__text"]').eq(1)
   }
   getData() {
      return cy.get('[class="gridCard__text"]').eq(2)
   }
   getPrograms() {
      return cy.get('[class="dropdown-text"]').eq(0)
   }
   RollBack(condition) {
      if (condition == 'Setting') {
         home.getSetting().should('have.text', 'Settings').click()
      } else {
         // Perform actions if the condition is false
         home.getSetting().should('have.text', 'Configuración').click()
         profilePage.getPreparedLanguage().click()
         cy.get('.ng-binding').eq(21).click()
         profilePage.getSaveBtn().click()
         //cy.wait(10000)
      }
   }
   getHomeMenu() {
      return cy.get('.header__navbar_student').shadow().find('#home')
   }
   getBrowseMenu() {
      return cy.get('.header__navbar_student').shadow().find('[data-id="program"]')
   }
   getClaasesMenu() {
      return cy.get('.header__navbar_student').shadow().find('[data-id="classes"]')
   }
   getGradesMenu() {
      return cy.get('.header__navbar_student').shadow().find('#grades')
      
   }

}
export default ProfilePage
