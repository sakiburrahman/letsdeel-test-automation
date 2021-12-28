import BasePage from "../base-page";


// Page Element of Create Contract page
const CONTRACT_TYPE_HEADER_TEXT = 'h1';
const FIXED_RATE_CONTRACT_LINK = '.heap-start-fixed-contract .mt-9';
const PAY_AS_YOU_GO_CONTRACT_LINK = '.heap-start-payg-contract .mt-9';
const MILESTONE_CONTRACT_LINK = '.heap-start-milestone-contract .mt-9';
const FULL_TIME_EMPLOYEE_CONTRACT_LINK = '[href="/create/full-time-employee"] .mt-9';


var basePage = new BasePage();

// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class CreateContractPage {


    getContractTypeHeaderText = () => cy.get(CONTRACT_TYPE_HEADER_TEXT);
    getFixedRateContractLink = () => cy.get(FIXED_RATE_CONTRACT_LINK);
    getPayAsYouContractLink = () => cy.get(PAY_AS_YOU_GO_CONTRACT_LINK);
    getMilestoneContractLink = () => cy.get(MILESTONE_CONTRACT_LINK);
    getFullTimeEmployeeContractLink = () => cy.get(FULL_TIME_EMPLOYEE_CONTRACT_LINK);

    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 
    displayContractTypeHeaderText = () => {
        this.getContractTypeHeaderText().isVisible(CONTRACT_TYPE_HEADER_TEXT);
        this.getContractTypeHeaderText().contains('Contract Type')
        basePage.logInfo('[Contract Type] header being displayed');
    };

    displayFixedRateContractLink = () => {
        this.getFixedRateContractLink().isVisible(FIXED_RATE_CONTRACT_LINK);
        basePage.logInfo('[Fixed Rate] contract link is being displayed');
    };

    displayPayAsYouContractLink = () => {
        this.getPayAsYouContractLink().isVisible(PAY_AS_YOU_GO_CONTRACT_LINK);
        basePage.logInfo('[Pay As You Go] contract link is being displayed');
    };

    displayMilestoneContractLink = () => {
        this.getMilestoneContractLink().isVisible(MILESTONE_CONTRACT_LINK);
        basePage.logInfo('[Milestone] contract link is being displayed');
    };

    displayFullTimeEmployeeContractLink = () => {
        this.getFullTimeEmployeeContractLink().isVisible(FULL_TIME_EMPLOYEE_CONTRACT_LINK);
        basePage.logInfo('[Full-Time Employee] contract link is being displayed')
    };


    // ----------------------------------- Input Funtion ----------------------------------- 



    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnFixedRateContractLink = () => {
        this.getFixedRateContractLink().click();
        basePage.logInfo('Clicked on [[Fixed Rate] contract link');
    };

}

