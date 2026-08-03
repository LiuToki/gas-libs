// For typescript Library.
import { addMenuToMenuBarAux_, amexAux_, callbackAmexAux_ } from "./load-amex-file-aux";

export namespace GASLibLoadAmexFile {
	/**
	 * Setup for menu bar, please calling onOpne.
	 * @param menuName Menu name for menu bar.
	 * @param itemName Item name in the menu name.
	 */
	export function addMenuToMenuBar(menuName: string, itemName: string): void {
		addMenuToMenuBarAux_(menuName, itemName);
	}

	/**
	 * Open Amex Dialog.
	 */
	function amex(): void {
		amexAux_();
	}
	
	/**
	 * Process amex csv file.
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
	export function callbackAmex(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number) {
		callbackAmexAux_(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne);
	}
}
