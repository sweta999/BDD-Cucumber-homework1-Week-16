
Feature: TestSuite Test
  As a user I want to login into nopcommerce website

  @Sanity
  Scenario: Verify user should add the product to the Shopping Cart Successfully
    Given   I am on nopcommerce homepage
    When    I click on Computers link
    And     I click on Desktop link
    And     I select sort by position Name: A to Z
    And     I click on Add to Cart
    And     I should navigate to Build your own computer page successfully "<verifyMessage>"
    And     I select 2.2 GHz Intel Pentium Dual-Core E2200 "<value>"
    And     I select 8GB [+$60.00] "<value>"
    And     I select HDD radio 400 GB [+$100.00] "<value>"
    And     I select OS radio Vista Premium [+$60.00] "<value>"
    And     I  check two check boxes Microsoft Office [+$50.00] and I check Total Commander [+$5.00]
    And     Verify the price $1475.00 "<verifyPrice>"
    And     I click on ADD TO CART Button
    Then    Verify the Message, The product has been added to your shopping cart on Top green Bar "<verifyMessage1>"
    And     Close the bar clicking on the cross button