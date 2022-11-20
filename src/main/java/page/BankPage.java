package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class BankPage {
	WebDriver driver;
	@FindBy(how=How.XPATH, using ="//span[contains(text(),'Bank & Cash')]")WebElement bankCashElement;
	
	@FindBy(how=How.XPATH, using ="//a[contains(text(),'New Account')]")WebElement newAccountElement;
	@FindBy(how=How.XPATH, using ="//button[@type='submit']")WebElement submitElement;
	@FindBy(how=How.XPATH, using ="//h2[contains(text(),' Accounts ')]")WebElement accountElement;

public void clickBank() {
	
	bankCashElement.click();
	
}	
	
public void clickNewAccount() {
	
	newAccountElement.click();
	
}	
public void verifyAccount() {
	
	Assert.assertTrue(accountElement.isDisplayed());

}

public BankPage(WebDriver driver) {

	this.driver=driver;
	
}
}