/**
 * @file samawah_server.h
 * @brief 
 * @author LiuToki
 * @date 2020-12-13
 * 
 * Copyright (c) 2020 杜若.
 * 
 */

/**
 * @description GAS でスプレッドシートにある翻訳データをjson データとして吐き出すクラス.
 * @export
 * @class CMakeLanguageJson
 */
export class CMakeLanguageJson //implements CMakeLanguageJsonInterface
{
	private m_sheet: GoogleAppsScript.Spreadsheet.Sheet;	// sheet class for GAS. 
	private m_keyColNum: number = 1;	// Where the json key columns.
	private m_langColNums: number[] = [];	// Where the json values columns.
	private m_rowDataStart: number = 1;	// Where the data start row(file name row).
	private m_folderId: string = "";

	/**
	 * Creates an instance of CMakeLanguageJson.
	 * @param sheet		翻訳データが書かれているシート.
	 * @param folderId	json データを保存するGoogle Drive ディレクトリID
	 */
	constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string)
	{
		this.m_sheet = sheet;	// Why typescriptese people!

		this.Initialize(sheet, folderId);
	}

	/**
	 * @description		Initialize.
	 * @param sheet		翻訳データが書かれているシート.
	 * @param folderId	json データを保存するGoogle Drive ディレクトリID
	 */
	public Initialize(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string)
	{
		this.m_sheet = sheet;
		this.m_folderId = folderId;
		const rowStart = 1;
		const colStart = 2;
		const rowSearchRange = 1;
		const colSearchRange = sheet.getLastColumn() - colStart + 1;
		const makingFileRange = this.m_sheet.getRange(rowStart, colStart, rowSearchRange, colSearchRange);
		for (let i:number = makingFileRange.getColumn(); i <= makingFileRange.getLastColumn(); ++i) {
			this.m_langColNums.push(i);
		}
	}

	/**
	 * @description		json のkey がある列番号を設定.
	 * @param keyColNum	key の列番号.
	 */
	public SetKeyColumnNumber(keyColNum: number)
	{
		this.m_keyColNum = keyColNum;
	}

	/**
	 * @description			各種翻訳対象のvalue がある列番号を配列で設定.
	 * @param langColNums	value の列番号配列.
	 */
	public SetLangColumnNumbers(langColNums: number[])
	{
		this.m_langColNums = langColNums;
	}

	/**
	 * @description			ファイル名が書かれている行(データの先頭行)を設定.
	 * @param rowDataStart	先頭行番号.
	 */
	public SetRowDataStart(rowDataStart: number)
	{
		this.m_rowDataStart = rowDataStart;
	}
	
	/**
	 * @description	各種設定をもとにお仕事をする.
	 * @returns true: 成功, false: 失敗.
	 */
	public DoWork(): boolean
	{
		if (undefined == this.m_sheet) {
			// Not reached.
			return false;
		}

		const keysRawTwoDim = this.m_sheet.getRange(this.m_rowDataStart + 1, this.m_keyColNum, this.m_sheet.getLastRow() - this.m_rowDataStart).getValues();
		let keys: string[] = [];

		keysRawTwoDim.forEach(value => {
			keys.push(value[0]);
		});

		if (keys.length <= 0) {
			// key がないんですけど.
			return false;
		}

		if (this.IsSameValueInArray(keys)) {
			return false;
		}

		this.m_langColNums.forEach(num => {
			let filename: string = "";
			filename = this.m_sheet.getRange(this.m_rowDataStart, num).getValue() + "";	// https://stackoverflow.com/questions/869773/how-to-convert-instance-of-any-type-to-string
			if (filename.length > 0) {
				if (!this.MakeOneLanguageFile(keys.concat(), num, filename)) {
					return false;
				}
			}
		});

		return true;
	}

	/**
	 * @description	配列内の重複要素をチェック
	 * @private
	 * @param array	チェック対象配列.
	 * @returns true: 重複あり, false: 重複なし.
	 */
	private IsSameValueInArray(array: any[]): boolean
	{
		let s = new Set(array);
		return s.size != array.length;
	}

	/**
	 * @description			一つの翻訳json ファイルの作成.
	 * @private
	 * @param keys			スプレッドシートのkey 列の要素配列.
	 * @param valueColNum	翻訳対象のvalue 列番号.
	 * @param filename		出力ファイル名.
	 * @returns true: 成功, false: 失敗.
	 */
	private MakeOneLanguageFile(keys: string[], valueColNum: number, filename: string): boolean
	{
		// nest するjson data を作成する関数.
		// let MakeNestJsonData: Function = (keyStrArray: string[], value: string, jsonData: string): string => {
		// 	// 先頭のkey を取得し、配列の要素を一つ減らす.
		// 	let key: string = keyStrArray[0];
		// 	keyStrArray.shift();

		// 	jsonData = jsonData + "\"" + key + "\":";

		// 	let isNest: boolean = false;
		// 	if (keyStrArray.length > 0) {
		// 		isNest = true;
		// 		jsonData += "{";
		// 		jsonData = MakeNestJsonData(keyStrArray, value, jsonData);
		// 	} else {
		// 		jsonData = jsonData + "\"" + value + "\"";
		// 	}
			
		// 	if (isNest) {
		// 		jsonData += "}";
		// 	}

		// 	return jsonData;
		// }

		// json data を作成する関数.
		let MakeJsonData: Function = (key: string, value: string, jsonData: string): string => {
			jsonData = jsonData + "\"" + key + "\":\"" + value + "\"";			
			return jsonData;
		}

		const valuesRawTwoDim = this.m_sheet.getRange(this.m_rowDataStart + 1, valueColNum, this.m_sheet.getLastRow() - this.m_rowDataStart).getValues();
		let values: string[] = [];

		valuesRawTwoDim.forEach(value => {
			values.push(value[0]);
		});

		if (keys.length != values.length) {
			return false;
		}

		let languageJson: string = "";
		languageJson += "{";

		for (let index = 0; index < keys.length; ++index) {
			if (index > 0) {
				// 追加の要素なのでカンマで区切ります.
				languageJson += ",";
			}
			let key: string = keys[index];
			let value: string = values[index];
			languageJson += MakeJsonData(key, value, "");
		}

		languageJson += "}";

		this.CreateJsonFileToGoogleDriveFolder(filename, languageJson);

		return true;
	}

	/**
	 * @description		Googole Drive の指定ディレクトリにファイルを作成.
	 * @private
	 * @param filename	ファイル名.
	 * @param contents	ファイルの中身.
	 */
	private CreateJsonFileToGoogleDriveFolder(filename: string, contents: string)
	{
		const folder = DriveApp.getFolderById(this.m_folderId);
		folder.createFile(filename, contents);
	}

}