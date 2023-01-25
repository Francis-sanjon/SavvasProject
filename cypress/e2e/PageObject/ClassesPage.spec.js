class ClassesPage{

    getAssignmentPage(){
        return  cy.get('.sidebar-navigation').shadow().find('[data-label="Assignments"]')
      }
      getPeopleLabel(){
        return cy.get('.sidebar-navigation').shadow().find('[data-label="Students & Groups"]')
      }
      getGraphLabel(){
        return cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]')
      }
      getBookLabel(){
       
      }
}
export default ClassesPage