/*!
 * @file samawah_server.h
 * @brief 
 * @author LiuToki
 * @date 2020-12-13
 * 
 * Copyright (c) 2020 杜若.
 * 
 */


// Make Language json file class.


export class CMakeLanguageJson //implements CMakeLanguageJsonInterface
{
	private m_sheet: GoogleAppsScript.Spreadsheet.Sheet;	// sheet class for GAS. 
	private m_keyColNum: number = 1;	// Where the json key columns.
	private m_langColNums: number[] = [];	// Where the json values columns.
	private m_rowDataStart: number = 1;	// Where the data start row(file name row).
	private m_folderId: string = "";

	constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string)
	{
		this.m_sheet = sheet;	// Why typescriptese people!
		
		this.Initialize(sheet, folderId);
	}

	public Initialize(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string)
	{
		this.m_sheet = sheet;
		this.m_folderId = folderId;
		const rowStart = 1;
		const colStart = 2;
		const rowSearchRange = sheet.getLastRow() - rowStart + 1;
		const colSearchRange = sheet.getLastColumn() - colStart + 1;
		const makingFileRange = this.m_sheet.getRange(rowStart, colStart, rowSearchRange, colSearchRange);
		for (let i:number = makingFileRange.getColumn(); i < makingFileRange.getLastColumn(); ++i) {
			this.m_langColNums.push(i);
		}
	}

	/**
	 * SetKeyColumnNumber
	 */
	public SetKeyColumnNumber(keyColNum: number)
	{
		this.m_keyColNum = keyColNum;
	}

	/**
	 * SetLangColumnNumbers
	 */
	public SetLangColumnNumbers(langColNums: number[])
	{
		this.m_langColNums = langColNums;
	}

	/**
	 * SetRowDataStart
	 */
	public SetRowDataStart(rowDataStart: number)
	{
		this.m_rowDataStart = rowDataStart;
	}
	
	/**
	 * DoWork
	 */
	// とりあえず成否をbool で表しておく.
	public DoWork(): boolean
	{
		if (undefined == this.m_sheet) {
			// Not reached.
			return false;
		}

		const keysRawTwoDim = this.m_sheet.getRange(this.m_rowDataStart + 1, this.m_keyColNum).getValues();
		let keys: string[] = [];

		keysRawTwoDim.forEach(value => {
			keys.push(value[0]);
		});

		if (keys.length <= 0) {
			// key がないんですけど.
			return false;
		}

		this.m_langColNums.forEach(num => {
			let filename: string = "";
			filename = this.m_sheet.getRange(this.m_rowDataStart, num).getValue() + "";	// https://stackoverflow.com/questions/869773/how-to-convert-instance-of-any-type-to-string
			if (filename.length > 0) {
				if (!this.MakeOneLanguageFile(keys, num, filename)) {
					return false;
				}
			}
		});

		return true;
	}

	private MakeOneLanguageFile(keys: string[], valueColNum: number, filename: string): boolean
	{
		// 一つのjson data を作成する関数.
		let MakeNestJsonData: Function = (keyStrArray: string[], value: string, jsonData: string): string => {
			// 先頭のkey を取得し、配列の要素を一つ減らす.
			let key: string = keyStrArray[0];
			keyStrArray.shift();

			jsonData = jsonData + "\"" + key + "\":";

			if (keyStrArray.length > 0) {
				jsonData += "{";
				jsonData = MakeNestJsonData(keyStrArray, value, jsonData);
			} else {
				jsonData = jsonData + "\"" + value + "\"";
			}
			
			jsonData += "}";
			return jsonData;
		}

		const valuesRawTwoDim = this.m_sheet.getRange(this.m_rowDataStart + 1, valueColNum).getValues();
		let values: string[] = [];

		valuesRawTwoDim.forEach(value => {
			values.push(value[0]);
		});

		if (keys.length != values.length) {
			return false;
		}

		let languageJson: string = "";
		languageJson += "{";

		values.forEach(value => {
			languageJson += MakeNestJsonData
		});

		languageJson += "}";

		this.CreateJsonFileToGoogleDriveFolder(filename, languageJson);

		return true;
	}

	private CreateJsonFileToGoogleDriveFolder(filename: string, contents: string)
	{
		const folder = DriveApp.getFolderById(this.m_folderId);
		folder.createFile(filename, contents);
	}

}