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
 * @param newSheet true: Create Graph to New Sheet(sheet name is same as graph name), false: Create Graph to the Active Sheet.
 */
export function createBalanceSheetGraphAux_(
	years: any,
	currectAssets: any,
	intansibleAssets: any,
	currentLiabilities: any,
	longTermLiabilities: any,
	stockholdersEquitys: any,
	graphTitle: string,
	vAxisTitle: string,
	newSheet: boolean): void {
	// まずは現在のシートを取得.
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	var sheet = SpreadsheetApp.getActiveSheet();

	if (newSheet) {
		sheet = ss.insertSheet(graphTitle);
	}

	// グラフを挿入する位置を設定する.
	var chartPosition = sheet.getRange("A1");

	// グラフオブジェクトを作成する
	var chart = sheet.newChart()
	.setPosition(chartPosition.getRow(), chartPosition.getColumn(), 0, 0)
	.asColumnChart()
	.setStacked()
	.setTitle(graphTitle)
	.addRange(years)
	.addRange(currectAssets)
	.addRange(intansibleAssets)
	.addRange(currentLiabilities)
	.addRange(longTermLiabilities)
	.addRange(stockholdersEquitys)
	.setOption("series", {
		0: {targetAxisIndex: 0,
			labelInLegend: currectAssets.getValues()[0][0]},
		1: {targetAxisIndex: 0,
			labelInLegend: intansibleAssets.getValues()[0][0]},
		2: {targetAxisIndex: 1,
			labelInLegend: currentLiabilities.getValues()[0][0]},
		3: {targetAxisIndex: 1,
			labelInLegend: longTermLiabilities.getValues()[0][0]},
		4: {targetAxisIndex: 1,
			labelInLegend: stockholdersEquitys.getValues()[0][0]},
	})
	.setOption("hAxis", {
		title: years.getValues()[0][0]
	})
	.setOption("vAxes", {
		0: {
			title: vAxisTitle
		}
	})
	.build();

	if (newSheet) {
		// グラフの余分な情報を隠す.
		sheet.hideSheet();
		sheet.showSheet();
		sheet.getRange("A1").activate();
		ss.setActiveSheet(sheet);
		ss.moveActiveSheet(1);
	}

	// グラフを挿入.
	sheet.insertChart(chart);
}