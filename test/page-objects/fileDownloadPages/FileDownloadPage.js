import { Label } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class FileDownloadPage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator("File Downloader"), "Unique element from File Download page"), "File Downlaod page");

        this.fileName = (text) => new Label(PreciseTextLocator(text), "File to download");
    }

    async isFileLabelDisplayed(fileName){
        return await this.fileName(fileName).state().isDisplayed();
    }

    async downloadFile(fileName){
        await this.fileName(fileName).click();
    }
}

export default new FileDownloadPage();