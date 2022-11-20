$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "1 User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 22,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "savings",
        "joints",
        "12345",
        "Lok",
        "345",
        "https://www.chase.com/"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2166559500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "1 User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"savings\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"joints\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"12345\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"Lok\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"345\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.chase.com/\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1115494400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.User_enters_the_username_as(String)"
});
formatter.result({
  "duration": 108283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 86786400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 672300400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 39655700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 344236500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 387518200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "savings",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 70171800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joints",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 92304200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 74892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lok",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 75936200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 88531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 114098600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "duration": 523364100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 1420445700,
  "status": "passed"
});
formatter.after({
  "duration": 645484900,
  "status": "passed"
});
});