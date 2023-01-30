class Home {
  getNavBar(){
    return cy.get('.header__navbar').as('NavBar')
  }
  getHelpIcon() {
    return cy.get('.header__navbar').shadow().find('[data-utility-id="help"]').eq(0)
  }
  getHelpIconColor() {
    return cy.get('.header__navbar').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]')
  }
  getPopUp() {
    return cy.get('.header__navbar').shadow().find('.help-search-container')
  }
  getInputBox() {
    return cy.get('.header__navbar').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]')
  }
  getHelpForThisPage() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(0)
  }
  getPopUpCloseBtn() {
    return cy.get('[class="floatingModal hydrated"]').shadow().find('[class="close-button hydrated"]')
  }
  getProgramTraining() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(1)
  }
  getTechnicalSupport() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(2)
  }
  getProgramSpecialist() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(3)
  }
  getProfileIcon() {
    return cy.get('.header__navbar_student').shadow().find('[class="profile-container"]')
    }
  getSetting() {
    return cy.get('.header__navbar').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="settings"]')
  }
  getClassCardTitle(){
    return  cy.get('.classInfiniteScroll').find('[class="class__title"]')
  }
getColorBar(){
  return cy.get('[class="classAssignmentLink"]')
}
getClassCardImage(){
  return cy.get('[class="classImage"]').eq(1)
}
getClassCardHeader(){
  return cy.get('.classInfiniteScroll').find('[class="class__title"]').eq(1)
}
  getClassContainer(){
    return  cy.get('.classInfiniteScroll')
  }
 

}
export default Home