package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.runner.Computer;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Computers extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(Computer.class.getName());

    @FindBy(xpath = "//ul[@class='sublist']/li[1]/a")
    WebElement desktopLink;

    public void clickOnDesktop() {
        mouseHoverToElementAndClick(desktopLink);
        log.info("Clicking on desktop link : " + desktopLink.toString());
    }

}
