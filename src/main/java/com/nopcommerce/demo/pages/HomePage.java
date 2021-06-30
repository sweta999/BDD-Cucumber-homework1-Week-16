package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class HomePage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//div[@class='header-menu']/ul[1]/li[1]/a")
    WebElement computerLink;
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement verifyComputerPage;
    @FindBy(xpath = "//div[@class='page-title']/h1")
    WebElement verifyMessage;

    public void selectMenu(String menu) {
        List<WebElement> elementList = driver.findElements(By.xpath("//div[@class='header-menu']/ul[1]/li/a"));
        log.info("Clicking on Computer Link : " + elementList.toString());
        for (WebElement element : elementList) {
            if (element.getText().equalsIgnoreCase(menu)) {
                element.click();
                break;
            }
        }
    }

    public void clickOnComputerMenu() {
        mouseHoverToElementAndClick(computerLink);
        log.info(("Clicking on Computer Link : " + computerLink.toString()));
    }

    public String verifyComputerPageNavigation() {
        log.info("Verifying Computers Page : " + verifyComputerPage.toString());
        return getTextFromElement(verifyComputerPage);
    }

    public String verifyTopMenuMessage() {
        log.info("Verifying Top Menu Pages : " + verifyMessage.toString());
        return getTextFromElement(verifyMessage);
    }

}