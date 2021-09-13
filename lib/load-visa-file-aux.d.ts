/**
 * Setup for menu bar, please calling onOpne.
 * @param menuName Menu name for menu bar.
 * @param itemName Item name in the menu name.
 */
export declare function addMenuToMenuBarAux_(menuName: string, itemName: string): void;
/**
 * Open Visa Dialog.
 */
export declare function visaAux_(): void;
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
export declare function callbackVisaAux_(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number): void;
