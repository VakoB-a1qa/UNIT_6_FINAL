import { When, Then } from "@wdio/cucumber-framework";
import Browser from "../../../framework/browser/Browser.js";
import MainPage from "../../page-objects/MainPage.js";
import FileDownloadPage from "../../page-objects/fileDownloadPages/FileDownloadPage.js";
import { assert } from "chai";
import path from "path";
import { downloadDir } from "../../../framework/configs/main.wdio.conf.js";


When(/^I select '(.*)' page$/, async (page) => {
    await MainPage.clickNavigationLink(page);
});

When(/^I download (.*) file$/, async (fileName) => {
    assert.isTrue(
        await FileDownloadPage.isFileLabelDisplayed(fileName),
        `File with name ${fileName} does not exist on the page`
    );
    await FileDownloadPage.downloadFile(fileName);
});

Then(/^I should see (.*) file in downloads folder$/, async (fileName) => {
    const downloadedFilePath = path.join(downloadDir, fileName);
    assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File could not be downloaded');
});


