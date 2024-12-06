import { Given, When } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/MainPage.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from "@wdio/allure-reporter";


Given(/^user can visit the main page$/, async () => {
    await Browser.openUrl(mainConfig.baseUrl);
})

When(/^user clicks '(.*)' link$/, async (pageLink) => {
    AllureReporter.addStep(`clicking ${pageLink}`);
    await MainPage.clickNavigationLink(pageLink);
})