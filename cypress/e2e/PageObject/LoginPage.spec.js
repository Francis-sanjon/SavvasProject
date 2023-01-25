class LoginPage {

    getUserName() {
        return cy.get('#username')
    }
    getPassword() {
        return cy.get('#password')
    }
    loginBtn() {
        return cy.get('#signInBtn')
    }
}

export default LoginPage