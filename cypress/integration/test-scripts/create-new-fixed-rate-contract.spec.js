import BasePage from '../../pageObjects/base-page';
import ContractsPage from '../../pageObjects/pages/contracts-page';
import CreateContractPage from '../../pageObjects/pages/create-contract-page';
import FixedRateContractPage from '../../pageObjects/pages/fixed-rate-contract-page';
import HomePage from '../../pageObjects/pages/home-page';


var basePage = new BasePage();
var homePage = new HomePage();
var createContractPage = new CreateContractPage();
var fixedRateContractPage = new FixedRateContractPage();
var contractsPage = new ContractsPage();


describe('Authentify user can create a new fixed ratte contract', () => {

    before(function () {

        cy.generateFixture();
        cy.navigateToDeelSite();
        // basePage.setLargeDesktopViewPort();
        cy.loginToDeelSite();


    });

    it('Should display home page after successfull login', () => {
        homePage.displayHomeSidebarMenu();
        homePage.displayCreateAContractSideBarMenu();
        homePage.displayViewMyContractButton();
        homePage.displayPaidThisMonthSlider();
    })

    it('Should be able to navigate contract type page', () => {
        homePage.clickOnCreateAContractSideBarMenu();
        createContractPage.displayContractTypeHeaderText();
        createContractPage.displayFixedRateContractLink();
        createContractPage.displayPayAsYouContractLink();
        createContractPage.displayMilestoneContractLink();
        createContractPage.displayFullTimeEmployeeContractLink();
    })

    it('Should be able to navigate fixed rate contract page', () => {
        createContractPage.clickOnFixedRateContractLink();
        fixedRateContractPage.displayCreatingAFixedContracteHeaderText();

    })

    it('Should be able to create a new fixed rate contract', () => {
        fixedRateContractPage.displayEntityDropdownInputField();
        fixedRateContractPage.displayContractNameInputField();
        fixedRateContractPage.inputContractName();
        fixedRateContractPage.displayContractorsTaxResidenceDropdownInputField();
        fixedRateContractPage.selectContractorsTaxResidence();
        fixedRateContractPage.displayChoseAStatesDropdownInputField();
        fixedRateContractPage.selectState();
        fixedRateContractPage.displayJobTitleInputField();
        fixedRateContractPage.selectJobTitle();
        fixedRateContractPage.displaySeniorityLevelDropdownInputField();
        fixedRateContractPage.selectSeniorityLevel();
        fixedRateContractPage.displayScopeOfWorkInputField();
        fixedRateContractPage.displaySelectPredefinedWorkScopesDropdownMenu();
        fixedRateContractPage.selectPreDefinedWorkScopes();
        fixedRateContractPage.displayContractorsStartDateDatepickerInputField();
        fixedRateContractPage.selectContractorsStartDate()
        fixedRateContractPage.displayNextButton();
        fixedRateContractPage.displayBackButton();
        fixedRateContractPage.clickOnNextButton();
        fixedRateContractPage.displayCurrencyDropdownMenu();
        fixedRateContractPage.selectCurrency();
        fixedRateContractPage.inputPaymentRate();
        fixedRateContractPage.displayPaymentFrequencyDropdownMenu();
        fixedRateContractPage.selectPaymentFrequency();
        fixedRateContractPage.displayBackButton();
        fixedRateContractPage.displaySubmitPaymentDetailsButton();
        fixedRateContractPage.clickOnSubmitPaymentDetailsButton();
        fixedRateContractPage.displaySubmitDefineDatesButton();
        fixedRateContractPage.clickOnSubmitDefineDatesButton();
        fixedRateContractPage.displayAddASpecialClauseButton();
        fixedRateContractPage.clickOnAddASpecialClauseButton();
        fixedRateContractPage.inputSpecialClause();
        fixedRateContractPage.displaySubmitExtrasButton();
        fixedRateContractPage.clickOnSubmitExtrasButton();
        fixedRateContractPage.displayCreateContractButton();
        fixedRateContractPage.clickOnCreateContractButton();

    })

    it('Verify Created fixed rate contract should be listed in contracts grid', () => {
        homePage.displayContractSideBarMenu();
        homePage.clickOnContractSideBarMenu();
        contractsPage.displayContractSearchInputField();
        contractsPage.searchLatestAddedContractName

    })


})
