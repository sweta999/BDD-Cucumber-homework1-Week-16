$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/TestSuite.feature");
formatter.feature({
  "line": 2,
  "name": "TestSuite Test",
  "description": "As a user I want to login into nopcommerce website",
  "id": "testsuite-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 69268955200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should add the product to the Shopping Cart Successfully",
  "description": "",
  "id": "testsuite-test;verify-user-should-add-the-product-to-the-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computers link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to Build your own computer page successfully \"\u003cverifyMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select 2.2 GHz Intel Pentium Dual-Core E2200 \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select 8GB [+$60.00] \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select HDD radio 400 GB [+$100.00] \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select OS radio Vista Premium [+$60.00] \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I  check two check boxes Microsoft Office [+$50.00] and I check Total Commander [+$5.00]",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the price $1475.00 \"\u003cverifyPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Message, The product has been added to your shopping cart on Top green Bar \"\u003cverifyMessage1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the bar clicking on the cross button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSuiteStefdefs.iAmOnNopcommerceHomepage()"
});
formatter.result({
  "duration": 1913302000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteStefdefs.iClickOnComputersLink()"
});
formatter.result({
  "duration": 5138462700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteStefdefs.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 1772201800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteStefdefs.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 1438493500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteStefdefs.iClickOnAddToCart()"
});
formatter.result({
  "duration": 3343928100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cverifyMessage\u003e",
      "offset": 64
    }
  ],
  "location": "TestSuiteStefdefs.iShouldNavigateToBuildYourOwnComputerPageSuccessfully(String)"
});
formatter.result({
  "duration": 6270197600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2200",
      "offset": 42
    },
    {
      "val": "\u003cvalue\u003e",
      "offset": 48
    }
  ],
  "location": "TestSuiteStefdefs.iSelectGHzIntelPentiumDualCoreE(int,int,int,String)"
});
formatter.result({
  "duration": 231178500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 9
    },
    {
      "val": "60",
      "offset": 16
    },
    {
      "val": "00",
      "offset": 19
    },
    {
      "val": "\u003cvalue\u003e",
      "offset": 24
    }
  ],
  "location": "TestSuiteStefdefs.iSelectGB$(int,int,int,String)"
});
formatter.result({
  "duration": 998692900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    },
    {
      "val": "100",
      "offset": 29
    },
    {
      "val": "00",
      "offset": 33
    },
    {
      "val": "\u003cvalue\u003e",
      "offset": 38
    }
  ],
  "location": "TestSuiteStefdefs.iSelectHDDRadioGB$(int,int,int,String)"
});
formatter.result({
  "duration": 429913200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 38
    },
    {
      "val": "\u003cvalue\u003e",
      "offset": 43
    }
  ],
  "location": "TestSuiteStefdefs.iSelectOSRadioVistaPremium$(int,int,String)"
});
formatter.result({
  "duration": 142098400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "00",
      "offset": 48
    },
    {
      "val": "5",
      "offset": 83
    },
    {
      "val": "00",
      "offset": 85
    }
  ],
  "location": "TestSuiteStefdefs.iCheckTwoCheckBoxesMicrosoftOffice$AndICheckTotalCommander$(int,int,int,int)"
});
formatter.result({
  "duration": 1293474900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1475",
      "offset": 18
    },
    {
      "val": "00",
      "offset": 23
    },
    {
      "val": "\u003cverifyPrice\u003e",
      "offset": 27
    }
  ],
  "location": "TestSuiteStefdefs.verifyThePrice$(int,int,String)"
});
formatter.result({
  "duration": 2083788000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteStefdefs.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 463763800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cverifyMessage1\u003e",
      "offset": 87
    }
  ],
  "location": "TestSuiteStefdefs.verifyTheMessageTheProductHasBeenAddedToYourShoppingCartOnTopGreenBar(String)"
});
formatter.result({
  "duration": 23735112000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027bar-notification\u0027]/div/p\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-R59LGQ5\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Nehal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50854}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a600e7b46b993274af65e628f1351f70\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027bar-notification\u0027]/div/p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:57)\r\n\tat com.nopcommerce.demo.pages.BuildYourOwnComputer.getTextProductAddedToCart(BuildYourOwnComputer.java:126)\r\n\tat com.nopcommerce.demo.stepdefs.TestSuiteStefdefs.verifyTheMessageTheProductHasBeenAddedToYourShoppingCartOnTopGreenBar(TestSuiteStefdefs.java:91)\r\n\tat ✽.Then Verify the Message, The product has been added to your shopping cart on Top green Bar \"\u003cverifyMessage1\u003e\"(src/test/java/resources/featurefile/TestSuite.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSuiteStefdefs.closeTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8627381300,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/TopMenuTest.feature");
formatter.feature({
  "line": 2,
  "name": "Top Menu Test",
  "description": "As a user I want to login into nopcommerce website",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#  @Smoke"
    },
    {
      "line": 6,
      "value": "#  Scenario: Verify user is navigated to Computers Page Successfully"
    },
    {
      "line": 7,
      "value": "#    Given    I am on homepage"
    },
    {
      "line": 8,
      "value": "#    When     I click on Computers link"
    },
    {
      "line": 9,
      "value": "#    Then     I should navigate to Computers Page Successfully"
    }
  ],
  "line": 12,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"\u003cmenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"\u003cverifyMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;",
  "rows": [
    {
      "cells": [
        "menu",
        "verifyMessage"
      ],
      "line": 18,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 19,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 20,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 21,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads"
      ],
      "line": 22,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 23,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 24,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 25,
      "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27153771500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Computers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 2884695800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 420384500,
  "status": "passed"
});
formatter.after({
  "duration": 1461818600,
  "status": "passed"
});
formatter.before({
  "duration": 11474118200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 1928241100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 132504200,
  "status": "passed"
});
formatter.after({
  "duration": 1092997000,
  "status": "passed"
});
formatter.before({
  "duration": 6468313000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Apparel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 1810139200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 171066000,
  "status": "passed"
});
formatter.after({
  "duration": 1136489600,
  "status": "passed"
});
formatter.before({
  "duration": 5911587900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Digital downloads\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 1820116100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 133687100,
  "status": "passed"
});
formatter.after({
  "duration": 1642759900,
  "status": "passed"
});
formatter.before({
  "duration": 6943964900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 1166308700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 135951500,
  "status": "passed"
});
formatter.after({
  "duration": 2037554500,
  "status": "passed"
});
formatter.before({
  "duration": 7572033500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Jewelry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Jewelry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 2202433800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 188308800,
  "status": "passed"
});
formatter.after({
  "duration": 1162306800,
  "status": "passed"
});
formatter.before({
  "duration": 6281241500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should navigate to Top Menu Pages Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-top-menu-pages-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Top Menu \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to the selected menu page Successfully \"Gift Cards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestStefdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 59100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 21
    }
  ],
  "location": "TopMenuTestStefdefs.iClickOnTopMenu(String)"
});
formatter.result({
  "duration": 1471649600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 58
    }
  ],
  "location": "TopMenuTestStefdefs.iShouldNavigateToTheSelectedMenuPageSuccessfully(String)"
});
formatter.result({
  "duration": 283871700,
  "status": "passed"
});
formatter.after({
  "duration": 1624112500,
  "status": "passed"
});
});