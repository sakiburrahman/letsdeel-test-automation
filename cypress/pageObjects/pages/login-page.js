import BasePage from "../base-page";

// Page Element of Login page
const LOGIN_USING_GOOGLE_BUTTON = '.position-relative > div';
const EMAIL_INPUT_FIELD = '[name="email"]';
const PASSWORD_INPUT_FIELD = '[name="password"]';
const LOGIN_BUTTON = '.mt-10 > div';
const SIGNUP_LINK = '.login-signup-link > div';


var basePage = new BasePage();


// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class LoginPage {

    getLoginUsingGoogleButton = () => cy.get(LOGIN_USING_GOOGLE_BUTTON);
    getEmailInputField = () => cy.get(EMAIL_INPUT_FIELD);
    getPasswordInputField = () => cy.get(PASSWORD_INPUT_FIELD);
    getLoginButton = () => cy.get(LOGIN_BUTTON);
    getSignupLink = () => cy.get(SIGNUP_LINK);

    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 
    displayLoginUsingGoogleButton = () => {
        this.getLoginUsingGoogleButton().isVisible(LOGIN_USING_GOOGLE_BUTTON);
        this.getLoginUsingGoogleButton().contains('Log in using Google')
        basePage.logInfo('[Log In Using Google] button is being displayed');
    };

    displayEmailInputField = () => {
        this.getEmailInputField().isVisible(EMAIL_INPUT_FIELD);
        basePage.logInfo('[Email Address] input field is being displayed');
    };

    displayPasswordInputField = () => {
        this.getPasswordInputField().isVisible(PASSWORD_INPUT_FIELD);
        basePage.logInfo('[Password] input field is being displayed');
    };

    displayLoginButton = () => {
        this.getLoginButton().isVisible(LOGIN_BUTTON);
        basePage.logInfo('[Log In] button is being displayed');
    };

    displaySignupLink = () => {
        this.getSignupLink().isVisible(SIGNUP_LINK);
        basePage.logInfo('[Sign Up] link is being displayed');
    };


    // ----------------------------------- Input Funtion ----------------------------------- 

    inputEmail = () => {
        cy.fixture('loginCredentials').then((data) => {
            const EMAIL = data.registeredEmailAddress;
            this.getEmailInputField().clear();
            basePage.logInfo('[Eamil Address] input box has been cleared');
            this.getEmailInputField().type(EMAIL);
            basePage.logInfo('Email has been entered in [Email Address] input box');
        });
    };


    inputPassword = () => {
        cy.fixture('loginCredentials').then((data) => {
            const PASS = data.passwordOfRegisteredEmail;
            this.getPasswordInputField().clear();
            basePage.logInfo('[Password] input box has been cleared');
            this.getPasswordInputField().type(PASS);
            basePage.logInfo('Password has been entered in [Password] input box');
        });
    };


    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnLoginButton = () => {
        this.getLoginButton().click();
        basePage.logInfo('Clicked on [Log In] Button');
    };

}



