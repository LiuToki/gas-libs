// Make Language json file class.

// export interface CMakeLanguageJson
// {
// 	SetKeyColumnNumber(keyColNum: number) : void;
// 	SetLangColumnNumbers(langColNums: number[]) : void;
// 	DoWork() : void;
// }

export class CMakeLanguageJson //Impl implements CMakeLanguageJson
{
	private m_sheet: any = null;	// sheet class for GAS. 
	private m_keyColNum: number = 1;
	private m_langColNums: number[] = [];

	constructor() {
		console.log("Construct!");
		// Initialize.
		// var sheet = SpreadsheetApp.getActiveSheet();
		// this.m_sheet = sheet;
		// const rawColumns: any[] = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()[0];
		
	}

	private MakeOneLanguageFile(num: number)
	{
		const docs = DocumentApp.create("hoge");
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
	 * DoWork
	 */
	public DoWork() {
		console.log("Do it!");
	}

}