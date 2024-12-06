import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import AlertHandlingPage from "../../page-objects/alertPages/AlertHandlingPage.js"


When(/^user clicks 'Click for JS Alert' button$/, async () => {
    await AlertHandlingPage.clickJsAlertButton();
});

Then(/^message '(.*)' is displayed$/, async (message) => {
    await AlertHandlingPage.acceptJsAlert()
    assert.equal(
        await AlertHandlingPage.getResultText(),
        message,
        `Alert message doesn't match the required message: '${message}'`
    );
});


