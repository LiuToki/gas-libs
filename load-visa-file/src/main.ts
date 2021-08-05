// For GAS Library.
import { addMenuToMenuBarAux_, visaAux_, callbackVisaAux_ } from "./load-visa-file-aux";

/**
 * Setup for menu bar, please calling onOpne.
 * @param menuName Menu name for menu bar.
 * @param itemName Item name in the menu name.
 */
export function addMenuToMenuBar(menuName: string, itemName: string): void {
	addMenuToMenuBarAux_(menuName, itemName);
}

/**
 * Open Visa Dialog.
 */
function visa(): void {
	visaAux_();
}

/**
 * Process visa csv file.
 * @param formObject formObject from callback.
 * @param colNum Number of column.
 * @param colDate Insert date column.
 * @param colName Insert name column.
 * @param colAmount Insert amount of money column.
 * @param colRemarks Insert remarks column.
 * @param colCard Insert "カード" column.
 * @param colOne Insert "1" column.
 */
function callbackVisa(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number) {
	callbackVisaAux_(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne);
}
