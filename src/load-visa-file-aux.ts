/**
 * Setup for menu bar, please calling onOpne.
 * @param menuName Menu name for menu bar.
 * @param itemName Item name in the menu name.
 */
export function addMenuToMenuBarAux_(menuName: string, itemName: string): void {
	var ui = SpreadsheetApp.getUi();
	var menu = ui.createMenu(menuName);
	menu.addItem(itemName, "GASLibLoadVisaFile.visa");
	menu.addToUi();
}

/**
 * Open Visa Dialog.
 */
export function visaAux_(): void {
	var html = HtmlService.createHtmlOutputFromFile("formVisa");
	SpreadsheetApp.getUi().showModalDialog(html, "load visa file");
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
export function callbackVisaAux_(formObject: any, colNum: number, colDate: number, colName: number, colAmount: number, colRemarks: number, colCard: number, colOne: number): void {

	// 同じカラム番号は入れちゃダメ.
	// 適当過ぎてちょっとアレなコード.
	var isError = false;
	if (colNum == colDate || colNum == colName || colNum == colAmount || colNum == colRemarks || colNum == colCard || colNum == colOne) {
		isError = true;
	} else if (colDate == colName || colDate == colAmount || colDate == colRemarks || colDate == colCard || colDate == colOne) {
		isError = true;
	} else if (colName == colAmount || colName == colRemarks || colName == colCard || colName == colOne) {
		isError = true;
	} else if (colAmount == colRemarks || colAmount == colCard || colAmount == colOne) {
		isError = true;
	} else if (colRemarks == colCard || colRemarks == colOne) {
		isError = true;
	} else if (colCard == colOne) {
		isError = true;
	}

	if (isError) {
		Browser.msgBox("Error: The same column number was detected.");
		return;
	}

	try {
		// フォームで指定したテキストファイルを読み込む.
		var fileBlob = formObject.myFile;
		var month = formObject.month;

		// テキストとして取得（Windowsの場合、文字コードに Shift_JIS を指定）.
		var text = fileBlob.getDataAsString("sjis");

		// 改行コード(\n)で分割し配列に格納する.
		var textLines = text.split(/[\n]/);

		// 書き込むシートを取得.
		var sheet = SpreadsheetApp.getActiveSheet();

		// テキストファイルをシートに展開する.
		// 先頭はヘッダ.
		for (var i = 0; i < textLines.length; ++i) {
			var textLinesCells = textLines[i].split(",");
			if (textLinesCells.length < 7 || textLinesCells[0] == "") {
				continue;
			}

			// 日付を/でパースする.
			var date = textLinesCells[0].split("/");
			if (date.length != 3) {
				continue;
			}

			// 月を取得.
			var targetMonth = date[1];

			// 先頭の0を削除.
			{
				var idx = 0;
				while (targetMonth.charAt(idx) == "0") {
					++idx;
				}
				targetMonth = targetMonth.slice(idx);
			}

			if (month == targetMonth) {
				var appendArray = [];
				for (var colIdx = 0; colIdx < colNum; ++colIdx) {
					if (colIdx == colDate) { appendArray.push(textLinesCells[0]); }
					else if (colIdx == colName) { appendArray.push(textLinesCells[1]); }
					else if (colIdx == colAmount) { appendArray.push(textLinesCells[2]); }
					else if (colIdx == colRemarks) { appendArray.push(textLinesCells[6]); }
					else if (colIdx == colCard) { appendArray.push("カード"); }
					else if (colIdx == colOne) { appendArray.push(1); }
					else { appendArray.push(""); }
				}
				sheet.appendRow(appendArray);
			}
		}
	} catch (error) {
		Browser.msgBox("Error: " + error);
	}
}
