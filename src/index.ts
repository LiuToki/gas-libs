// For typescript Library.
import { createBalanceSheetGraphAux_ } from "./balance-sheet-graph-aux";

export namespace GASLibBalanceSheetGraph {
	/**
	 * Create balance sheet stacked bar graph.
	 * @param years Ranges for years. First column is title.
	 * @param currectAssets Ranges for Current Assets. First column is title.
	 * @param intansibleAssets Ranges for Instansible Assets. First column is title.
	 * @param currentLiabilities Ranges for Current Liabilities. First column is title.
	 * @param longTermLiabilities Ranges for Long-Term Liabilities. First column is title.
	 * @param stockholdersEquitys Ranges for Stockholders Equitys. First column is title.
	 * @param graphTitle graph title.
	 * @param vAxisTitle verticle axis title.
	 * @param vAxisMax verticle axis max value.
	 * @param newSheet true: Create Graph to New Sheet(sheet name is same as graph name), false: Create Graph to the Active Sheet.
	 */
	export function createBalanceSheetGraph(
		years: any,
		currectAssets: any,
		intansibleAssets: any,
		currentLiabilities: any,
		longTermLiabilities: any,
		stockholdersEquitys: any,
		graphTitle: string,
		vAxisTitle: string,
		vAxisMax: number,
		newSheet: boolean): void {
		createBalanceSheetGraphAux_(years, currectAssets, intansibleAssets, currentLiabilities, longTermLiabilities, stockholdersEquitys, graphTitle, vAxisTitle, vAxisMax, newSheet);
	}
}
