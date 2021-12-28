// import '@percy/cypress';

import BasePage from "../pageObjects/base-page";
import HomePage from "../pageObjects/pages/home-page";
import LoginPage from "../pageObjects/pages/login-page";



const basePage = new BasePage();
const loginPage = new LoginPage();
const homePage = new HomePage();

// import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'



// addMatchImageSnapshotCommand()



// if (Cypress.config('isInteractive')) {
//     Cypress.Commands.add('matchImageSnapshot', () => {
//         basePage.logInfo('Skipping snapshot 👀')
//     })
// } else {
//     addMatchImageSnapshotCommand({
//         failureThreshold: 0.00,
//         failureThresholdType: 'percent',
//         customDiffConfig: { threshold: 0.0 },
//         capture: "viewport"

//     })
// }


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

// Cypress.Commands.add('generateFixture', () => {
//     const faker = require('faker')
  
//     cy.writeFile('./cypress/fixtures/contractName.json', {
      
//           'contractName':`${faker.name.firstName()} ${faker.name.lastName()}`,
          
//     })
//   })

Cypress.Commands.add('generateFixture', () => {

    function makeName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 7; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
      console.log(makeName());
      cy.writeFile('./cypress/fixtures/contractName.json', {

        'contractName': makeName()

      })

})

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
})

Cypress.Commands.add('isEnable', selector => {
    cy.get(selector).should('be.enabled');
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
})

Cypress.Commands.add('isEqual', (selector, text) => {
    cy.get(selector).should('eql', text);
})

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
})


Cypress.Commands.add('navigateToDeelSite', () => {

    cy.fixture('loginCredentials').then((data) => {
        const URL = data.websiteUrl;
        cy.visit(URL);
        basePage.logInfo('Web Site has been loaded successfully');
    });

})

Cypress.Commands.add('loginToDeelSite', () => {

    loginPage.displayLoginUsingGoogleButton();
    loginPage.displaySignupLink();
    loginPage.displayEmailInputField();
    loginPage.inputEmail();
    loginPage.displayPasswordInputField();
    loginPage.inputPassword();
    loginPage.displayLoginButton();
    loginPage.clickOnLoginButton();
    homePage.displayHomeSidebarMenu();
})
