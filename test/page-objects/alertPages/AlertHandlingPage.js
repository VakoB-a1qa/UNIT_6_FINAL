import { Label, Button } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import Browser from "../../../framework/browser/Browser.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class AlertHandlingPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator("JavaScript Alerts"), "Unique element from JavaScript Alerts page"), "JavaScript Alerts page");
    this.jsAlertButton = new Button("//*[@onclick='jsAlert()']", "JS Alert button");
    this.resultText = new Label("//*[@id='result']", "Result text");
  }

  async clickJsAlertButton() {
    await this.jsAlertButton.click();
  }

  async acceptJsAlert() {
    await Browser.Dialog.acceptDialog();
  }

  async getResultText() {
    return await this.resultText.getText();
  }
}

export default new AlertHandlingPage();
