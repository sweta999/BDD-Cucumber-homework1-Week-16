package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopMenuTestStefdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

//    @When("^I click on Computers link$")
//    public void iClickOnComputersLink() {
//        new HomePage().clickOnComputerMenu();
//    }
//
//    @Then("^I should navigate to Computers Page Successfully$")
//    public void iShouldNavigateToComputersPageSuccessfully() throws InterruptedException {
//        Thread.sleep(5000);
//        Assert.assertEquals("Computers",new HomePage().verifyComputerPageNavigation());
//    }


    @When("^I click on Top Menu \"([^\"]*)\"$")
    public void iClickOnTopMenu(String menu)  {
        new HomePage().selectMenu(menu);
    }

    @Then("^I should navigate to the selected menu page Successfully \"([^\"]*)\"$")
    public void iShouldNavigateToTheSelectedMenuPageSuccessfully(String verifyMessage)  {
        Assert.assertEquals(verifyMessage, new HomePage().verifyTopMenuMessage());
        Assert.assertTrue(verifyMessage, new HomePage().verifyTopMenuMessage().contains(verifyMessage));

    }
}
