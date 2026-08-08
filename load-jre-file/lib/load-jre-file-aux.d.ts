/**
 * Setup for menu bar, please calling onOpne.
 * @param menuName Menu name for menu bar.
 * @param itemName Item name in the menu name.
 */
export declare function addMenuToMenuBarAux_(menuName: string, itemName: string): void;
/**
 * Add an item to an existing menu builder.
 * Use the returned menu for subsequent additions, then call addToUi.
 * @param menu Existing menu builder.
 * @param itemName Item name in the menu.
 * @returns The menu builder with the JRE item added.
 */
export declare function addItemToMenuAux_(menu: GoogleAppsScript.Base.Menu, itemName: string): GoogleAppsScript.Base.Menu;
/**
 * Open JRE Dialog.
 */
export declare function jreAux_(): void;
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
 */
export declare function callbackJREAux_(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number): void;
