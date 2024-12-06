import { Input, Label, Button } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class SampleAppPage extends BasePage {
  constructor() {
    super(new Label("//*[@class='container']/*[text()='Sample App']", "Unique element from Sample page"), "Sample page");
    this.usernameInput = new Input("//*[@name='UserName']", "username input");
    this.passwordInput = new Input("//*[@name='Password']", "password input");
    this.loginButton = new Button("//*[@id='login']", "login button");
    this.successMessage = new Label("//*[@id='loginstatus']", "success message label");
  }

  async inputUsername(username) {
    await this.usernameInput.typeText(username);
  }

  async inputPassword(password) {
    await this.passwordInput.typeSecret(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async getSuccessMessageText() {
    await this.successMessage.state().waitForDisplayed();
    return this.successMessage.getText();
  }

}

export default new SampleAppPage();
