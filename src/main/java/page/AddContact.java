package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class AddContact {
	
	WebDriver driver;
	
	@FindBy(how=How.XPATH, using="//input[@id='account']")WebElement titleElement;
	@FindBy(how=How.XPATH, using="//input[@id='description']")WebElement desElement;
	
	@FindBy(how=How.XPATH, using="//input[@id='account_number']")WebElement accElement;
	@FindBy(how=How.XPATH, using="//input[@id='contact_person']")WebElement conElement;
	@FindBy(how=How.XPATH, using="//input[@id='contact_phone']")WebElement phnElement;
	@FindBy(how=How.XPATH, using="//input[@id='ib_url']")WebElement ibElement;
	@FindBy(how=How.XPATH, using="//button[@class='btn btn-primary']")WebElement subElement;
	@FindBy(how=How.XPATH, using="//h5[contains(text(),'Manage Accounts')]")WebElement maElement;

public void insertTitle(String accountTitle) {
	
	titleElement.sendKeys(accountTitle+TestBase.generateRandomnum(9));
	
}
	
public void insertDes(String description) {
	
	desElement.sendKeys(description+TestBase.generateRandomnum(99));
	
}
	
	
public void insertCon(String contactPerson) {
	
	conElement.sendKeys(contactPerson+TestBase.generateRandomnum(999));
	
}	
	
	
public void insertAcc(String accountNumber) {
	
	accElement.sendKeys(accountNumber);
	
}	

public void insertPhn(String phone) {
	
	phnElement.sendKeys(phone+TestBase.generateRandomnum(999));
	
}	



public void insertIb(String internetBankingURL ) {
	
	ibElement.sendKeys(internetBankingURL);
	
}	

public void insertSub( ) {
	
	subElement.click();

	
}

public AddContact(WebDriver driver) {
	this.driver= driver;
}

public void waitElement() {
	
	TestBase.waitforelement(driver, 10, maElement);
}

public void verifyma() {
	
	Assert.assertEquals("Manage Accounts", maElement.getText());
	
}

}