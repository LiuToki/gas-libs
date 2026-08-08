export declare namespace GASLibLoadJREFile {
    /**
     * Setup for menu bar, please calling onOpne.
     * @param menuName Menu name for menu bar.
     * @param itemName Item name in the menu name.
     */
    function addMenuToMenuBar(menuName: string, itemName: string): void;
    /**
     * Add an item to an existing menu builder.
     * Use the returned menu for subsequent additions, then call addToUi.
     * @param menu Existing menu builder.
     * @param itemName Item name in the menu.
     * @returns The menu builder with the JRE item added.
     */
    function addItemToMenu(menu: GoogleAppsScript.Base.Menu, itemName: string): GoogleAppsScript.Base.Menu;
    /**
     * Process JRE csv file.
     * @param formObject formObject from callback.
     * @param colNum Number of column.
     * @param colDate Insert date column.
     * @param colName Insert name column.
     * @param colAmount Insert amount of money column.
     * @param colRemarks Insert remarks column.
     * @param colCard Insert "カード" column.
     * @param colOne Insert "1" column.
     * @description Each column number in the range 0 to colNum, otherwise output is empty string.
     */
    function callbackJRE(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number): void;
}
