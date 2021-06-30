
Feature: Top Menu Test
  As a user I want to login into nopcommerce website

#  @Smoke
#  Scenario: Verify user is navigated to Computers Page Successfully
#    Given    I am on homepage
#    When     I click on Computers link
#    Then     I should navigate to Computers Page Successfully

  @Regression
  Scenario Outline: Verify user should navigate to Top Menu Pages Successfully
    Given           I am on homepage
    When            I click on Top Menu "<menu>"
    Then            I should navigate to the selected menu page Successfully "<verifyMessage>"

    Examples:
      | menu              | verifyMessage     |
      | Computers         | Computers         |
      | Electronics       | Electronics       |
      | Apparel           | Apparel           |
      | Digital downloads | Digital downloads |
      | Books             | Books             |
      | Jewelry           | Jewelry           |
      | Gift Cards        | Gift Cards        |
