import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import HomePage from "../../page-objects/loginPages/HomePage.js";
import AllureReporter from "@wdio/allure-reporter";

Then(/^Main page is open$/, async () => {
    AllureReporter.addStep("Main page is open");
    assert.isTrue(await HomePage.isPageOpened(), "main page was could not be opened");
});

When(/^I click on '(.*)'$/, async (linkName) => {
    AllureReporter.addStep(`^I click on ${linkName}`);
    await HomePage.clickOnLink(linkName);
});


