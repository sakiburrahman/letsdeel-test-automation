import BasePage from "../base-page";


// Page Element of Contracts page
const LATEST_ADDED_CONTRACT_NAME = ':nth-child(1) > :nth-child(1) > .user-tag > :nth-child(2) > .noWordBreakOut > .flex > .color-black';

// :nth-child(9) > :nth-child(1) > .user-tag > :nth-child(2) > .noWordBreakOut > .flex > .color-black
const LATEST_ADDED_CONTRACT_RATE = 'h1';
const LATEST_ADDED_CONTRACT_PAYMENT_FREQUENCY = ':nth-child(1) > [style="width: 170px;"] > .flex > h6';
const LATEST_ADDED_CONTRACT_DELETE_BUTTON = ':nth-child(1) > .contract-table-row-icons > .float-right > .ml-7 > .tooltip > .ignore-click > .button > :nth-child(1) > .flex > svg > path';
const CONTRACT_SEARCH_INPUT_FIELD = '.mdc-text-field__input';


var basePage = new BasePage();

// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class ContractsPage {

    getLatestAddedContractName = () => cy.get(LATEST_ADDED_CONTRACT_NAME);
    getContractSearchInputField = () => cy.get(CONTRACT_SEARCH_INPUT_FIELD);


    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 
    displayLatestAddedContractName = () => {
        cy.get('.odd-table').find('tbody').find("tr")
            .then((row) => {
                //row.length will give you the row count
                basePage.logInfo(row.length);
            });

        this.getLatestAddedContractName().isVisible(LATEST_ADDED_CONTRACT_NAME);
        // this.getLatestAddedContractName().contains('');
        basePage.logInfo('[Latest Added Contract] name is being displayed');
    };

    displayContractSearchInputField = () => {
        this.getContractSearchInputField().isVisible(CONTRACT_SEARCH_INPUT_FIELD);
        basePage.logInfo('[Contract Search] input field is being displayed');
    };

    // ----------------------------------- Search Funtion ----------------------------------- 

    searchLatestAddedContractName = () => {
        cy.fixture('contractName').then((data) => {
            const LATEST_ADDED_CONTRACT_NAME = data.contractName;
            this.getContractSearchInputField().type(LATEST_ADDED_CONTRACT_NAME);
            basePage.logInfo('Searching for the added fixed rate contract');
            this.displayLatestAddedContractName();
            this.getLatestAddedContractName().contains(LATEST_ADDED_CONTRACT_NAME);
            basePage.logInfo('New Fixed Rate Contract created and listed in the contracts grid');
        });
    };


    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnFixedRateContractLink = () => {
        this.getFixedRateContractLink().click();
        basePage.logInfo('Clicked on [[Fixed Rate] contract link');
    };

}

