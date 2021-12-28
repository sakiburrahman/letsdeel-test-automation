
import BasePage from "../base-page";


// Page Element of Fixed Rate Contract page
const CREATING_A_FIXED_CONTRACT_HEADER_TEXT = 'h2';
const ENTITY_DROPDOWN_INPUT_FIELD = '.deel-ui__select__single-value';
const CONTRACT_NAME_INPUT_FIELD = '[name="name"]';
const CONTRACTORS_TAX_RESIDENCE_DROPDOWN_INPUT_FIELD = '.deel-ui__select__input-container[data-qa="contractor-tax-residence"] .deel-ui__select__value-container';
const CONTRACTORS_TAX_RESIDENCE_DROPDOWN_INPUT_SELECTOR = '#react-select-3-input';
const CHOOSE_A_STATES_DROPDOWN_INPUT_FIELD = '[data-qa="contractor-tax-residence-province"] > .deel-ui__select__control';
const CHOOSE_A_STATES_DROPDOWN_INPUT_SELECTOR = '#react-select-5-input';
const JOB_TITLE_INPUT_FIELD = '[name="jobTitle"]';
const JOB_TITLE_INPUT_SELECTOR = '#root > div > div > div > div > form > div.box.mb-10.undefined > div > div:nth-child(3) > div.suggestions-box > p:nth-child(954)';
const SENIORITY_LEVEL_DROPDOWN_INPUT_FIELD = '[data-qa="selector-seniority-level"] .deel-ui__select__value-container';
const SENIORITY_LEVEL_DROPDOWN_INPUT_SELECTOR = '#react-select-4-option-6 > .deel-ui__select__option-container';
const SCOPE_OF_WORK_INPUT_FILED = '[name="scope"]';
const SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU = 'h6.color-primary';
const SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU_SELECTOR = ':nth-child(17) > .deel-ui__button__content > span';
const CONTRACTORS_START_DATE_DATEPICKER_INPUT_FIELD = '.deel-ui__calendar-input-container__input_content_value';
const CONTRACTORS_START_DATE_DATEPICKER_MONTH_VIEW_GRID = '.react-calendar__month-view__days';
const NEXT_BUTTON = '.submit-general-info > div';
const BACK_BUTTON = 'p.color-gray-dark';
const CURRENCY_DROPDOWN_MENU = '.payment-set-controls > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container > .deel-ui__select__single-value';
const CURRENCY_DROPDOWN_SELECTOR = '#react-select-79-input';
const PAYMENT_RATE_INPUT_FIELD = '[name="rate"]';
const PAYMENT_FREQUENCY_DROPDOWN_MENU = 'div.env-development div.sidebar-space div.page-content.text-center form.text-left div.box.clearfix div.deel-ui__stack.deel-ui__stack_vertical.deel-ui__stack_with-spacing div.input-container:nth-child(2) div.flex.align-items-center div.deel-ui__select.select.w-100.css-2b097c-container div.deel-ui__select__input-container div.deel-ui__select__control.css-yk16xz-control div.deel-ui__select__value-container.deel-ui__select__value-container--has-value.css-1hwfws3 > div.deel-ui__select__single-value.css-1uccc91-singleValue';
const ADD_A_SPECIAL_CLAUSE_BUTTON = '[data-qa="add-a-special-clause"]';
const ADD_A_SPECIAL_CLAUSE_INPUT_FIELD = '.textarea';
const CREATE_CONTRACT_BUTTON = 'div.env-development div.sidebar-space div.page-content.text-center div.flex.flex-dir-col.compliance-form:nth-child(3) div.mt-7:nth-child(4) button.button.mt-7.submit-compliance.heap-create-contract-fixed-compliance-create.w-100 > div:nth-child(1)';
const SUBMIT_PAYMENT_DETAILS_BUTTON = '.submit-payments-details';
const SUBMIT_DEFINE_DATES_BUTTON = '.submit-define-dates';
const SUBMIT_EXTRAS_BUTTON = '.submit-extras';



var basePage = new BasePage();

// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class FixedRateContractPage {


    getCreatingAFixedContracteHeaderText = () => cy.get(CREATING_A_FIXED_CONTRACT_HEADER_TEXT);
    getEntityDropdownInputField = () => cy.get(ENTITY_DROPDOWN_INPUT_FIELD);
    getContractNameInputField = () => cy.get(CONTRACT_NAME_INPUT_FIELD);
    getContractorsTaxResidenceDropdownInputField = () => cy.get(CONTRACTORS_TAX_RESIDENCE_DROPDOWN_INPUT_FIELD);
    getContractorsTaxResidenceDropdownInputSelector = () => cy.get(CONTRACTORS_TAX_RESIDENCE_DROPDOWN_INPUT_SELECTOR);
    getChoseAStatesDropdownInputField = () => cy.get(CHOOSE_A_STATES_DROPDOWN_INPUT_FIELD);
    getChoseAStatesDropdownInputSelector = () => cy.get(CHOOSE_A_STATES_DROPDOWN_INPUT_SELECTOR);
    getJobTitleInputField = () => cy.get(JOB_TITLE_INPUT_FIELD);
    getJobTitleInputSelector = () => cy.get(JOB_TITLE_INPUT_SELECTOR);
    getSeniorityLevelDropdownInputField = () => cy.get(SENIORITY_LEVEL_DROPDOWN_INPUT_FIELD);
    getSeniorityLevelDropdownInputSelector = () => cy.get(SENIORITY_LEVEL_DROPDOWN_INPUT_SELECTOR);
    getScopeOfWorkInputField = () => cy.get(SCOPE_OF_WORK_INPUT_FILED);
    getSelectPredefinedWorkScopesDropdownMenu = () => cy.get(SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU);
    getSelectPredefinedWorkScopesDropdownMenuSelectors = () => cy.get(SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU_SELECTOR);
    getContractorsStartDateDatepickerInputField = () => cy.get(CONTRACTORS_START_DATE_DATEPICKER_INPUT_FIELD);
    getContractorsStartDateDatepickerMonthViewGrid = () => cy.get(CONTRACTORS_START_DATE_DATEPICKER_MONTH_VIEW_GRID);
    getNextButton = () => cy.get(NEXT_BUTTON);
    getBackButton = () => cy.get(BACK_BUTTON);
    getCurrencyDropdownMenu = () => cy.get(CURRENCY_DROPDOWN_MENU);
    getCurrencyDropdownSelector = () => cy.get(CURRENCY_DROPDOWN_SELECTOR);
    getPaymentRateInputField = () => cy.get(PAYMENT_RATE_INPUT_FIELD);
    getPaymentFrequencyDropdownMenu = () => cy.get(PAYMENT_FREQUENCY_DROPDOWN_MENU);
    getAddASpecialClauseButton = () => cy.get(ADD_A_SPECIAL_CLAUSE_BUTTON);
    getAddASpecialClauseInputField = () => cy.get(ADD_A_SPECIAL_CLAUSE_INPUT_FIELD);
    getCreateContractButton = () => cy.get(CREATE_CONTRACT_BUTTON);
    getSubmitPaymentDetailsButton = () => cy.get(SUBMIT_PAYMENT_DETAILS_BUTTON);
    getSubmitDefineDatesButton = () => cy.get(SUBMIT_DEFINE_DATES_BUTTON);
    getSubmitExtrasButton = () => cy.get(SUBMIT_EXTRAS_BUTTON);


    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 
    displayCreatingAFixedContracteHeaderText = () => {
        this.getCreatingAFixedContracteHeaderText().isVisible(CREATING_A_FIXED_CONTRACT_HEADER_TEXT);
        this.getCreatingAFixedContracteHeaderText().contains('Creating a fixed contract');
        basePage.logInfo('[Creating a fixed contract] header is being displayed');
    };

    displayEntityDropdownInputField = () => {
        this.getEntityDropdownInputField().isVisible(ENTITY_DROPDOWN_INPUT_FIELD);
        this.getEntityDropdownInputField().contains('ABC');
        basePage.logInfo('[Entity Dropdown] input field is being displayed');
    };

    displayContractNameInputField = () => {
        this.getContractNameInputField().isVisible(CONTRACT_NAME_INPUT_FIELD);
        basePage.logInfo('[Contract Name] input field is being displayed');
    };

    displayContractorsTaxResidenceDropdownInputField = () => {
        this.getContractorsTaxResidenceDropdownInputField().isVisible(CONTRACTORS_TAX_RESIDENCE_DROPDOWN_INPUT_FIELD);
        basePage.logInfo('[Contractors Tax] input field is being displayed');
    };

    displayChoseAStatesDropdownInputField = () => {
        this.getChoseAStatesDropdownInputField().isVisible(CHOOSE_A_STATES_DROPDOWN_INPUT_FIELD);
        basePage.logInfo('[Choose A State] input field is being displayed');
    };

    displayJobTitleInputField = () => {
        this.getJobTitleInputField().isVisible(JOB_TITLE_INPUT_FIELD);
        basePage.logInfo('[Job Title] input field link is being displayed')
    };

    displaySeniorityLevelDropdownInputField = () => {
        this.getSeniorityLevelDropdownInputField().isVisible(SENIORITY_LEVEL_DROPDOWN_INPUT_FIELD);
        basePage.logInfo('[Security Level] dropdown input field link is being displayed')
    };

    displayScopeOfWorkInputField = () => {
        this.getScopeOfWorkInputField().isVisible(SCOPE_OF_WORK_INPUT_FILED);
        basePage.logInfo('[Security Level] dropdown input field link is being displayed')
    };

    displaySelectPredefinedWorkScopesDropdownMenu = () => {
        this.getSelectPredefinedWorkScopesDropdownMenu().isVisible(SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU);
        basePage.logInfo('[Select Workscopes] dropdown input field link is being displayed')
    };

    displaySelectPredefinedWorkScopesDropdownMenuSelectors = () => {
        this.getSelectPredefinedWorkScopesDropdownMenuSelectors().isVisible(SELECT_PREDEFINED_WORKSCOPES_DROPDOWN_MENU_SELECTOR);
        basePage.logInfo('[Select Workscopes] dropdown value is being displayed')
    };

    displayContractorsStartDateDatepickerInputField = () => {
        this.getContractorsStartDateDatepickerInputField().isVisible(CONTRACTORS_START_DATE_DATEPICKER_INPUT_FIELD);
        basePage.logInfo('[Contractors Start Date] datepicker input field link is being displayed')
    };

    displayDatePickersMonthView = () => {
        this.getContractorsStartDateDatepickerMonthViewGrid().isVisible(CONTRACTORS_START_DATE_DATEPICKER_MONTH_VIEW_GRID);
        basePage.logInfo('[Month] grid is being displayed')
    };

    displayNextButton = () => {
        this.getNextButton().isVisible(NEXT_BUTTON);
        basePage.logInfo('[Next] button is being displayed')
    };

    displayBackButton = () => {
        this.getBackButton().isVisible(BACK_BUTTON);
        basePage.logInfo('[Back] button is being displayed')
    };

    displayCurrencyDropdownMenu = () => {
        this.getCurrencyDropdownMenu().isVisible(CURRENCY_DROPDOWN_MENU);
        basePage.logInfo('[Currency] dropdown menu is being displayed')
    };


    displayGBPCurrency = () => {
        this.getGBPCurrency().isVisible(GBP_CURRENCY);
        basePage.logInfo('[Currency] dropdown menu is being displayed')
    };

    displayPaymentRateInputField = () => {
        this.getPaymentRateInputField().isVisible(PAYMENT_RATE_INPUT_FIELD);
        basePage.logInfo('[Payment Rate] input field is being displayed')
    };

    displayPaymentFrequencyDropdownMenu = () => {
        this.getPaymentFrequencyDropdownMenu().isVisible(PAYMENT_FREQUENCY_DROPDOWN_MENU);
        basePage.logInfo('[Payment Frequency] dropdown menu is being displayed')
    };

    displayAddASpecialClauseButton = () => {
        this.getAddASpecialClauseButton().isVisible(ADD_A_SPECIAL_CLAUSE_BUTTON);
        basePage.logInfo('[Add A Special Clause] button is being displayed')
    };

    displayAddASpecialClauseInputField = () => {
        this.getAddASpecialClauseInputField().isVisible(ADD_A_SPECIAL_CLAUSE_INPUT_FIELD);
        basePage.logInfo('[Add A Special Clause] input field is being displayed')
    };

    displayCreateContractButton = () => {
        this.getCreateContractButton().isVisible(CREATE_CONTRACT_BUTTON);
        basePage.logInfo('[Create Contract] button is being displayed')
    };

    displaySubmitPaymentDetailsButton = () => {
        this.getSubmitPaymentDetailsButton().isVisible(SUBMIT_PAYMENT_DETAILS_BUTTON);
        basePage.logInfo('[Next] submit payment details button is being displayed')
    };

    displaySubmitDefineDatesButton = () => {
        this.getSubmitDefineDatesButton().isVisible(SUBMIT_DEFINE_DATES_BUTTON);
        basePage.logInfo('[Next] submit define dates button is being displayed')
    };

    displaySubmitExtrasButton = () => {
        this.getSubmitExtrasButton().isVisible(SUBMIT_EXTRAS_BUTTON);
        basePage.logInfo('[Next] submit extras button is being displayed')
    };



    // ----------------------------------- Input Funtion ----------------------------------- 
    inputContractName = () => {
        cy.fixture('contractName').then((data) => {
            const CONTRACT_NAME = data.contractName;
            this.getContractNameInputField().clear();
            basePage.logInfo('[Contract Name] input box has been cleared');
            this.getContractNameInputField().type(CONTRACT_NAME);
            basePage.logInfo('Contract name has been entered in [Contract Name] input box');
        });
    };

    inputPaymentRate = () => {

        this.displayPaymentRateInputField();
        this.getPaymentRateInputField().clear();
        basePage.logInfo('[Payment Rate] input box has been cleared');
        this.getPaymentRateInputField().type(1000);
        basePage.logInfo('Payment rate value has been inputted');

    };

    inputSpecialClause = () => {

        this.displayAddASpecialClauseInputField();
        this.getAddASpecialClauseInputField().clear();
        basePage.logInfo('[Add A Special Clause] input box has been cleared');
        this.getAddASpecialClauseInputField().type('Medical Emergency');
        basePage.logInfo('Special Clause has been inputted');

    };


    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnFixedRateContractLink = () => {
        this.getFixedRateContractLink().click();
        basePage.logInfo('Clicked on [Fixed Rate] contract link');
    };

    clickOnNextButton = () => {
        this.getNextButton().click();
        basePage.logInfo('Clicked on [Next] button');
    };

    clickOnSubmitPaymentDetailsButton = () => {
        this.getSubmitPaymentDetailsButton().click();
        basePage.logInfo('Clicked on [Next] submit payment details button');
    };

    clickOnSubmitDefineDatesButton = () => {
        this.getSubmitDefineDatesButton().click();
        basePage.logInfo('Clicked on [Next] submit define dates button');
    };

    clickOnAddASpecialClauseButton = () => {
        this.getAddASpecialClauseButton().click();
        basePage.logInfo('Clicked on [Add A Special Clause] button');
    };

    clickOnSubmitExtrasButton = () => {
        this.getSubmitExtrasButton().click();
        basePage.logInfo('Clicked on [Next] submit extras button');
    };

    clickOnCreateContractButton = () => {
        this.getCreateContractButton().click();
        basePage.logInfo('Clicked on [Create Contract] button');
    };


    // ----------------------------------- Select Funtion ----------------------------------- 

    selectContractorsTaxResidence = () => {
        this.getContractorsTaxResidenceDropdownInputField().click();
        basePage.logInfo('Clicked on [Contractors Tax Residence] dropdown menu');
        this.getContractorsTaxResidenceDropdownInputSelector().type('United States').type('{enter}');
        basePage.logInfo('[United Stated] has been selected from menu [Contractors Tax Residence] dropdown menu');

    };

    selectState = () => {
        this.getChoseAStatesDropdownInputField().click();
        basePage.logInfo('Clicked on [Choose A State] dropdown menu');
        this.getChoseAStatesDropdownInputSelector().type('Colorado').type('{enter}');
        basePage.logInfo('[Colorado] has been selected from menu [Choose A State] dropdown menu');
    };

    selectJobTitle = () => {
        this.getJobTitleInputField().click();
        basePage.logInfo('Clicked on [Job Title] input field');
        this.getJobTitleInputSelector().contains('Software Qa Engineer').click();
        basePage.logInfo('[Software Qa Engineer] has been selected from menu [Job Title] input field');
    };

    selectSeniorityLevel = () => {
        this.getSeniorityLevelDropdownInputField().click();
        basePage.logInfo('Clicked on [Seniority Level] dropdown menu');
        this.getSeniorityLevelDropdownInputSelector().click();
        basePage.logInfo('[Director] has been selected from menu [Seniority Level] dropdown menu');

    };

    selectPreDefinedWorkScopes = () => {
        this.getSelectPredefinedWorkScopesDropdownMenu().click();
        basePage.logInfo('Clicked on [Select Predefined work scopes] dropdown menu');
        this.displaySelectPredefinedWorkScopesDropdownMenuSelectors();
        this.getSelectPredefinedWorkScopesDropdownMenuSelectors().click()
        basePage.logInfo('[Software Developer] has been selected from menu [Select Predefined work scopes] dropdown menu');
    };

    selectContractorsStartDate = () => {
        var currentDate = new Date().getDate() - 1;
        this.getContractorsStartDateDatepickerInputField().click();
        basePage.logInfo('Clicked on [Contractors Start Date] date picker field');
        cy.contains(currentDate).click()
        basePage.logInfo('[Contractors Start Date] has been selected from date picker field');
    };

    selectCurrency = () => {
        this.getCurrencyDropdownMenu().click();
        basePage.logInfo('Clicked on [Currency] dropdown menu');
        cy.contains('GBP - British Pound').click()
        basePage.logInfo('[GBP - British Pound] currency has been selected from [Currency] dropdown menu');
    };

    selectPaymentFrequency = () => {
        this.getPaymentFrequencyDropdownMenu().click();
        basePage.logInfo('Clicked on [Payment Frequency] dropdown menu');
        cy.contains('Weekly').click()
        basePage.logInfo('[Weekly] payment frequency has been selected from [Payment Frequency] dropdown menu');
    };


}



