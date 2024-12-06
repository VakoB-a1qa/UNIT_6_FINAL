import { Label } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PartialTextLocator } from "../../../framework/utils/locatorHelper.js";

class HomePage extends BasePage {
  constructor() {
    super(new Label("//*[@id='title']", "Unique element from Home page"), "Home page");
    this.link = (text) => new Label(PartialTextLocator(text), `link, called: ${text}`)
  }

  async clickOnLink(linkName) {
    await this.link(linkName).click();
  }

}

export default new HomePage();
