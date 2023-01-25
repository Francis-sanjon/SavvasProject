class BaseClass {

    savvasLogin(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#signInBtn').click()
    }
    orgins() {
        cy.origin('https://nightly-www.savvasrealizedev.com', () => {
            return cy.url().should('include', 'dashboard');
        })
    }
    windowHandle(Locator) {
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })
        Locator.click()
        cy.get('@windowopen').then((stub) => {
            //const str=cy.log(stub.args[0][0]) // or console.log
            cy.visit(stub.args[0][0]) // or console.log
            //  cy.wait(5000)
            //cy.visit('/')
            // cy.go('back')
        })
    }
    split() {
        cy.get('#studentName').then((data) => {
            let firstLastName = data.text().toString()
            let firstName = firstLastName.split(" ")[0];
            return firstName;

        })
        return firstName;
    }

    
   async msg() {
        let firstName = await cy.get('#studentName').then((data) => {
            let firstLastName = data.text().toString()
            let firstName = firstLastName.split(" ")[0];
            return firstName;
        });
        return firstName;
    
    }
    
        resetLanguage() {
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
                    home.getprofileIcon().click()
                }

            })
        }


    }

export default BaseClass