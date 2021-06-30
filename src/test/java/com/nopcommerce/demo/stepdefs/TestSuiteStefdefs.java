package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.BuildYourOwnComputer;
import com.nopcommerce.demo.pages.Computers;
import com.nopcommerce.demo.pages.Desktop;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TestSuiteStefdefs {

    @Given("^I am on nopcommerce homepage$")
    public void iAmOnNopcommerceHomepage() {
    }

//    @Given("^I am on homepage$")
//    public void iAmOnHomepage() {
//    }

    @When("^I click on Computers link$")
    public void iClickOnComputersLink() {
        new HomePage().clickOnComputerMenu();
    }

    @And("^I click on Desktop link$")
    public void iClickOnDesktopLink() {
        new Computers().clickOnDesktop();
    }

    @And("^I select sort by position Name: A to Z$")
    public void iSelectSortByPositionNameAToZ() {
        new Desktop().selectSortByPositionNameAToZ();
    }

    @And("^I click on Add to Cart$")
    public void iClickOnAddToCart() throws InterruptedException {
        Thread.sleep(3000);
        new Desktop().clickOnAddToCart();
    }

    @Then("^I should navigate to Build your own computer page successfully \"([^\"]*)\"$")
    public void iShouldNavigateToBuildYourOwnComputerPageSuccessfully(String verifyMessage) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals("Build your own computer", new BuildYourOwnComputer().getTextBuildYourOwnComputer());
    }

    @And("^I select (\\d+)\\.(\\d+) GHz Intel Pentium Dual-Core E(\\d+) \"([^\"]*)\"$")
    public void iSelectGHzIntelPentiumDualCoreE(int arg0, int arg1, int arg2, String value) {
        new BuildYourOwnComputer().selectProcessorAttribute("1");  // select 1 or 2 here
    }

    @And("^I select (\\d+)GB \\[\\+\\$(\\d+)\\.(\\d+)\\] \"([^\"]*)\"$")
    public void iSelectGB$(int arg0, int arg1, int arg2, String value)  {
        new BuildYourOwnComputer().selectRamAttribute("5"); // select 3, 4 or 5
    }

    @And("^I select HDD radio (\\d+) GB \\[\\+\\$(\\d+)\\.(\\d+)\\] \"([^\"]*)\"$")
    public void iSelectHDDRadioGB$(int arg0, int arg1, int arg2, String value) {
        new BuildYourOwnComputer().selectHDDAttribute("7"); //select 6 or 7
    }

    @And("^I select OS radio Vista Premium \\[\\+\\$(\\d+)\\.(\\d+)\\] \"([^\"]*)\"$")
    public void iSelectOSRadioVistaPremium$(int arg0, int arg1, String value)  {
        new BuildYourOwnComputer().selectOSAttribute("9");  // select 8 or 9
    }

    @And("^I  check two check boxes Microsoft Office \\[\\+\\$(\\d+)\\.(\\d+)\\] and I check Total Commander \\[\\+\\$(\\d+)\\.(\\d+)\\]$")
    public void iCheckTwoCheckBoxesMicrosoftOffice$AndICheckTotalCommander$(int arg0, int arg1, int arg2, int arg3) throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputer().selectSoftwareTotalCommander();
    }

    @Then("^Verify the price \\$(\\d+)\\.(\\d+) \"([^\"]*)\"$")
    public void verifyThePrice$(int arg0, int arg1, String verifyPrice) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("$1,475.00", new BuildYourOwnComputer().getTextForPrice$1475());
    }

    @And("^I click on ADD TO CART Button$")
    public void iClickOnADDTOCARTButton() {
        new BuildYourOwnComputer().clickOnAddToCartButton();
    }

    @Then("^Verify the Message, The product has been added to your shopping cart on Top green Bar \"([^\"]*)\"$")
    public void verifyTheMessageTheProductHasBeenAddedToYourShoppingCartOnTopGreenBar(String verifyMessage1) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals("The Product has been added to your shopping cart", new BuildYourOwnComputer().getTextProductAddedToCart());
    }

    @And("^Close the bar clicking on the cross button$")
    public void closeTheBarClickingOnTheCrossButton() {
        new BuildYourOwnComputer().setCloseTheBarCrossButton();
    }
}


