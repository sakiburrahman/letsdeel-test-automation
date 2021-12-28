import BasePage from "../base-page";

// Page Element of Home page
const SIDEBAR_MENU_HOME = '.mb-2:nth-child(1) .sidebar-option-p';
const SIDEBAR_MENU_CREATE_A_CONTRACT = ':nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p';
const SIDEBAR_MENU_CONTRACTS = ':nth-child(3) > .anchor > .sidebar-link > .flex > .sidebar-option-p';
const VIEW_MY_CONTACTS_BUTTON = '[theme="primary"] > div';
const PAID_THIS_MONTH_SLIDER = '.toggle-big-background';
const LOG_OUT_BUTTON = '.button[theme="icon"] [viewBox="0 0 16 16"]';



var basePage = new BasePage();


// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class HomePage {


    getHomeSidebarMenu = () => cy.get(SIDEBAR_MENU_HOME);
    getCreateAContractSideBarMenu = () => cy.get(SIDEBAR_MENU_CREATE_A_CONTRACT);
    getContractSideBarMenu = () => cy.get(SIDEBAR_MENU_CONTRACTS);
    getViewMyContractButton = () => cy.get(VIEW_MY_CONTACTS_BUTTON);
    getPaidThisMonthSlider = () => cy.get(PAID_THIS_MONTH_SLIDER);
    getLogOutButton = () => cy.get(LOG_OUT_BUTTON);

    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 
    displayHomeSidebarMenu = () => {
        this.getHomeSidebarMenu().isVisible(SIDEBAR_MENU_HOME);
        this.getHomeSidebarMenu().contains('Home')
        basePage.logInfo('[Home] sidebar menu is being displayed');
    };

    displayCreateAContractSideBarMenu = () => {
        this.getCreateAContractSideBarMenu().isVisible(SIDEBAR_MENU_CREATE_A_CONTRACT);
        this.getCreateAContractSideBarMenu().contains('Create A Contract')
        basePage.logInfo('[Create A Contract] sidebar menu is being displayed');
    };

    displayContractSideBarMenu = () => {
        this.getContractSideBarMenu().isVisible(SIDEBAR_MENU_CONTRACTS);
        this.getContractSideBarMenu().contains('Contracts')
        basePage.logInfo('[Contracts] sidebar menu is being displayed');
    };

    displayViewMyContractButton = () => {
        this.getViewMyContractButton().isVisible(VIEW_MY_CONTACTS_BUTTON);
        // this.getViewMyContractButton().contains('View My Contracts')
        basePage.logInfo('[View My Contract] button is being displayed');
    };

    displayPaidThisMonthSlider = () => {
        this.getPaidThisMonthSlider().isVisible(PAID_THIS_MONTH_SLIDER);
        basePage.logInfo('[Paid This Month] slider button is being displayed');
    };

    displayLogOutButton = () => {
        this.getLogOutButton().isVisible(LOG_OUT_BUTTON);
        basePage.logInfo('[Log Out] button is being displayed');
    };


    // ----------------------------------- Input Funtion ----------------------------------- 



    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnCreateAContractSideBarMenu = () => {
        this.getCreateAContractSideBarMenu().click();
        basePage.logInfo('Clicked on [Create A Contract] sidebar menu');
    };

    clickOnContractSideBarMenu = () => {
        this.getContractSideBarMenu().click();
        basePage.logInfo('Clicked on [Contracts] sidebar menu');
    };

}



