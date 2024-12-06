import BasePage from '../../framework/page/BasePage.js'
import { Label, Button } from '../../framework/elements/index.js'
import { PreciseTextLocator, PartialTextLocator } from '../../framework/utils/locatorHelper.js'


class MainPage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator("Welcome to the-internet"), "Main page unique label"), 'Main page');
        this.navigationButton = (text) => new Button(PartialTextLocator(text), `Navigation text, called: ${text}`)
    }

    async clickNavigationLink(navigationText) {
        await this.navigationButton(navigationText).click();
    }
}

export default new MainPage();