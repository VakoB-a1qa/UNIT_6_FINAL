import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import SampleAppPage from "../../page-objects/loginPages/SampleAppPage.js";
import AllureReporter from "@wdio/allure-reporter";


Then(/^The page is Open$/, async () => {
    AllureReporter.addStep("The page is Open");
    assert.isTrue(await SampleAppPage.isPageOpened(), "could not open sample app page");
});

When(/^I enter username from env file$/, async () => {
    AllureReporter.addStep("I enter username from env file");
    await SampleAppPage.inputUsername(process.env.USERNAME);
});

When(/^I enter password from env file$/, async () => {
    AllureReporter.addStep("I enter password from env file");
    await SampleAppPage.inputPassword(process.env.PASSWORD);
});

When(/^I click 'Log In' button$/, async () => {
    AllureReporter.addStep("I click 'Log In' button");
    await SampleAppPage.clickOnLoginButton();
});

Then(/^Welcome message is displayed$/, async () => {
    AllureReporter.addStep("Welcome message is displayed");
    assert.equal((await SampleAppPage.getSuccessMessageText()), `Welcome, ${process.env.USERNAME}!`, "successful message wasn't correctly displayed");
});




