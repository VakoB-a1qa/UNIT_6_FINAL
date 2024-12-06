import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";


class DragAndDropPage extends BasePage {
  constructor() {
    super(
      new Label("//*[@class='example']/h3", "Drag And Drop page unique label"),
      "Drag And Drop page"
    );
    this.firstBox = new Label("//*[@id='columns']/div[1]", "First box in box Container")
    this.boxA = new Label("//*[@id='column-a']", "Draggable box A");
    this.boxB = new Label("//*[@id='column-b']", "Draggable box B");
  }

  async dragAtoB() {
    await this.boxA.dragAndDropToElement(this.boxB);
  }

  async firstBoxText() {
    return (await this.firstBox.findChild(Label, "/header", "First box's text element")).getText();
  }

}

export default new DragAndDropPage();
