package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class BuildYourOwnComputer extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputer.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement verifyTextBuildOwnComputer;
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processorAttribute;
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramAttribute;
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement hddAttribute320GB;
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement hddAttribute400GB;
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement osAttributeVistaHome;
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement osAttributeVistaPremium;
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement SoftwareMicrosoftOffice;
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement SoftwareAcrobatReader;
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement SoftwareTotalCommander;
    @FindBy(xpath = "//span[@id='price-value-1']")
    WebElement verifyPrice$1475;
    @FindBy(xpath = "//span[@id='price-value-1']")
    WebElement AddToCartButton;
    @FindBy(xpath = "//div[@id='bar-notification']/div/p") ////div[@class='bar-notification success']/p
    WebElement verifyProductAddedMsg;
    @FindBy(xpath = "//span[@class='close']")
    WebElement closeTheBarCrossButton;


    public String getTextBuildYourOwnComputer() {
        waitUntilVisibilityOfElement(verifyTextBuildOwnComputer,20);
        log.info("Verify the Text, Build Your Own Computer : " + verifyTextBuildOwnComputer.toString());
        return getTextFromElement(verifyTextBuildOwnComputer);
    }

    public void selectProcessorAttribute(String value) {
        selectByValueFromDropDown(processorAttribute,
                value);
        log.info("Selection of Processor Attribute : " + processorAttribute.toString());
    }

    public void selectRamAttribute(String value) {
        selectByValueFromDropDown(ramAttribute,
                value);
        log.info("Selection of Ram Attribute : " + ramAttribute.toString());
    }

    public void selectHDDAttribute(String value) {
        if (value == "6") {
            clickOnElement(hddAttribute320GB);
            log.info("Selection of HDD Attribute : " + hddAttribute320GB.toString());
        } else if (value == "7") {
            clickOnElement(hddAttribute400GB);
            log.info("Selection of HDD Attribute : " + hddAttribute400GB.toString());
        } else {
            System.out.println("Accepts value 6 or 7 only");
        }
    }

    public void selectOSAttribute(String value) {
        if (value == "8") {
            clickOnElement(osAttributeVistaHome);
            log.info("Selection of OS Attribute : " + osAttributeVistaHome.toString());
        } else if (value == "9") {
            clickOnElement(osAttributeVistaPremium);
            log.info("Selection of OS Attribute : " + osAttributeVistaPremium.toString());
        } else {
            System.out.println("Accepts value 8 or 9 only");
        }
    }

    public void mouseHoverOnSoftwareMicrosoftOffice() {
        mouseHoverToElement(SoftwareMicrosoftOffice);
        log.info("Selection of Software Attribute : " + SoftwareMicrosoftOffice.toString());
    }

    public void clearSoftwareMicrosoftOffice() {
        //waitUntilElementToBeClickable(SoftwareMicrosoftOffice, 10);
        SoftwareMicrosoftOffice.clear();
    }

    public void selectSoftwareMicrosoftOffice() {
        waitUntilElementToBeClickable(SoftwareMicrosoftOffice,20);
        clickOnElement(SoftwareMicrosoftOffice);
        log.info("Selection of Software Attribute : " + SoftwareMicrosoftOffice.toString());
    }


    public void selectSoftwareAcrobatReader() {
        mouseHoverToElementAndClick(SoftwareAcrobatReader); //mouse hover method works without parameter
        log.info("Selection of Software Attribute : " + SoftwareAcrobatReader.toString());
    }

    public void selectSoftwareTotalCommander() {
        mouseHoverToElementAndClick(SoftwareTotalCommander);
        log.info("Selection of Software Attribute : " + SoftwareTotalCommander.toString());
    }

    public String getTextForPrice$1475() {
        log.info("Verifying the Price : " + verifyPrice$1475.toString());
        return getTextFromElement(verifyPrice$1475);
    }

    public void clickOnAddToCartButton() {
        mouseHoverToElementAndClick(AddToCartButton);
        log.info("Click on Add to Cart Button : " + AddToCartButton.toString());
    }

    public String getTextProductAddedToCart() {
        log.info("Verifying the Text, Product is added to Cart : " + verifyProductAddedMsg.toString());
        return getTextFromElement(verifyProductAddedMsg);
    }

    public void setCloseTheBarCrossButton() {
        mouseHoverToElementAndClick(closeTheBarCrossButton);
        log.info("Close the Bar Cross Button : " + closeTheBarCrossButton.toString());
    }

}
