import { When, Then } from "@wdio/cucumber-framework";
import Browser from "../../../framework/browser/Browser.js";
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";


When(/^I navigate to testing website$/, async () => {
    await Browser.openUrl(mainConfig.baseUrl);
});