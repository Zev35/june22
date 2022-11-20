package step;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AddContact;
import page.BankPage;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefinition {
	WebDriver driver;
	LoginPage login;
	BankPage bank;
	AddContact contact;
	@Before
	public void runBefore() {
	driver =TestBase.init();
	login=PageFactory.initElements(driver, LoginPage.class);
	bank=PageFactory.initElements(driver, BankPage.class);
	contact=PageFactory.initElements(driver, AddContact.class);
	}
	
	@Given("^User is on the techfios login page$") 
	public void User_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
		
}
	@When("^User enters the username as \"([^\"]*)\"$") 	
    public void User_enters_the_username_as(String username) {
		login.insertUsername(username);
		
	}
	
	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) throws Throwable {
	    login.insertpassword(password);
	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() throws Throwable {
	    login.clickSubmit();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		login.verifyDash();
	    
	}
	
	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() throws Throwable {
	   bank=PageFactory.initElements(driver, BankPage.class);
	    bank.clickBank();
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() throws Throwable {
	    bank.clickNewAccount();
	    bank.verifyAccount();
	}

	@Then("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle) throws Throwable {
	    contact.insertTitle(accountTitle);
	}

	@Then("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) throws Throwable {
	    contact.insertDes(description);
	}

	

	@Then("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) throws Throwable {
	    contact.insertAcc(accountNumber);
	}

	@Then("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) throws Throwable {
	   contact.insertCon(contactPerson);
	}

	@Then("^User enters Phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String phone) throws Throwable {
	    contact.insertPhn(phone);
	}

	@Then("^User enters internetBankingURL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String internetBankingURL) throws Throwable {
	    contact.insertIb(internetBankingURL);
	}

	@Then("^User clicks on submit$")
	public void user_clicks_on_submit() throws Throwable {
	    contact.insertSub();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
	   
		contact.waitElement();
		contact.verifyma();
		
		TestBase.takesscreenShot(driver);
	   
	}

    @After
	public void tearDown() {
		
		driver.close();
		driver.quit();
			
	}
}



	

