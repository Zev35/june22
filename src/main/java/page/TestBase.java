package page;

import java.io.File;
import java.io.IOException;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestBase {
	static WebDriver driver;
	public static WebDriver init() {
	
		System.setProperty("webdriver.chrome.driver","Driver\\chromedriver.exe");
		 driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	
		
		}
	
	
	public static int generateRandomnum(int boundry) {
		
		Random rn = new Random();
		  int genaeratednum=rn.nextInt(boundry);
		  return genaeratednum;
		
	}

	public static void takesscreenShot(WebDriver driver) throws IOException {
		
		TakesScreenshot ts = (TakesScreenshot)driver;
		        File sourcefile = ts.getScreenshotAs(OutputType.FILE);
		        String currendirectory=System.getProperty("user.dir");
	FileUtils.copyFile(sourcefile,new File(currendirectory+"/screenshot/"+System.currentTimeMillis()+".png"));	        
		
	}
	
	public static void waitforelement(WebDriver driver,int time,WebElement element) {
	
		WebDriverWait wait = new WebDriverWait(driver,time);
		wait.until(ExpectedConditions.visibilityOf(element));
		
		
	}
	
}
