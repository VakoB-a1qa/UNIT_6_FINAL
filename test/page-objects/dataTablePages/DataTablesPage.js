import { Label, Table } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class DataTablesPage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator("Data Tables"), "Unique element from Data Tables page"), "Data Tables page");
        this.table = new Table("//*[@id='table1']");
    }

    async getTableDues(){
        const tableRows = await this.table.parseTableContent();
        return tableRows.map((element) => parseFloat(element["Due"].slice(1)));
    }
}

export default new DataTablesPage();