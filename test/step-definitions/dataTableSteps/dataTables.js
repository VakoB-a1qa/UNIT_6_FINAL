import { When } from "@wdio/cucumber-framework";
import DataTablesPage from "../../page-objects/dataTablePages/DataTablesPage";
import { assert } from "chai";

When(/^Example 1 table's 'Due' column sums up to (\d+)$/, async (num) => {
    const dueArray = await DataTablesPage.getTableDues();
    const sum = dueArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    assert.strictEqual(sum, parseFloat(num));
})
