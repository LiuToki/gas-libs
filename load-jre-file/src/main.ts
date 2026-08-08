// For GAS Library.
import { addItemToMenuAux_, addMenuToMenuBarAux_, jreAux_, callbackJREAux_ } from "./load-jre-file-aux";

/**
 * Setup for menu bar, please calling onOpne.
 * @param menuName Menu name for menu bar.
 * @param itemName Item name in the menu name.
 */
export function addMenuToMenuBar(menuName: string, itemName: string): void {
	addMenuToMenuBarAux_(menuName, itemName);
}

/**
 * Add an item to an existing menu builder.
 * Use the returned menu for subsequent additions, then call addToUi.
 * @param menu Existing menu builder.
 * @param itemName Item name in the menu.
 * @returns The menu builder with the JRE item added.
 */
export function addItemToMenu(menu: GoogleAppsScript.Base.Menu, itemName: string): GoogleAppsScript.Base.Menu {
	return addItemToMenuAux_(menu, itemName);
}

/**
 * Open JRE Dialog.
 */
export function jre(): void {
	jreAux_();
}

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
export function callbackJRE(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number) {
	callbackJREAux_(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne);
}
