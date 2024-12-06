import { When, Then, Given } from "@wdio/cucumber-framework";
import { assert } from "chai";
import MainPage from "../../page-objects/MainPage.js";
import Browser from "../../../framework/browser/Browser.js";
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";
import AllureReporter from "@wdio/allure-reporter";
import DragAndDropPage from "../../page-objects/dragAndDrop/dragAndDropPage.js";


Given("I open the Main page", async () => {
    AllureReporter.addStep(`opening url ${mainConfig.baseUrl}`);
    AllureReporter.addArgument("parameter", "parameter");
    Browser.openUrl(mainConfig.baseUrl);
})

When(/^I click '(.*)' navigation link$/, async (linkName) => {
    AllureReporter.addStep(`opening ${linkName} link`);
    MainPage.clickNavigationLink(linkName);
})

Then(/^'(.*)' page is opened$/, async (pageName) => {
    AllureReporter.addStep(`checking if ${pageName} is opened`);
    assert.isTrue(await DragAndDropPage.isPageOpened());
})

When(/^I drag box A to box B$/, async () => {
    AllureReporter.addStep("dragging A box to B box");
    await DragAndDropPage.dragAtoB();
})

Then(/^First box is '(.*)'$/, async (AorB) => {
    AllureReporter.addStep(`checking if first box is ${AorB}`);
    assert.equal(await DragAndDropPage.firstBoxText(), AorB);
})


