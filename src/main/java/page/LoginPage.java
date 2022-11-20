package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class LoginPage {

	WebDriver driver;
@FindBy(how=How.XPATH, using ="//input[@name='username']")WebElement usernameElement;
@FindBy(how=How.XPATH, using ="//input[@name='password']")WebElement passwordElement;
@FindBy(how=How.XPATH, using ="//button[@type='submit']")WebElement submitElement;
@FindBy(how=How.XPATH, using ="//h2[contains(text(),' Dashboard ')]")WebElement dashElement;
	

public void insertUsername(String username) {
	
usernameElement.sendKeys(username);
	
	
}

public void insertpassword(String password) {
	
passwordElement.sendKeys(password);
	
}

public void clickSubmit() {
	
submitElement.click();
	
}

public LoginPage(WebDriver driver) {

	this.driver=driver;
	
}

public void verifyDash() {
	
	Assert.assertEquals("Dashboard",dashElement.getText());
	
}
}
