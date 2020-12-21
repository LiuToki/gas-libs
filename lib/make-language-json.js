"use strict";
// Make Language json file class.
class CMakeLanguageFile {
    constructor() {
        this.m_sheet = null; // sheet class for GAS. 
        this.m_keyColNum = 1;
        this.m_langColNums = [];
        console.log("Construct!");
        // Initialize.
        // var sheet = SpreadsheetApp.getActiveSheet();
        // this.m_sheet = sheet;
        // const rawColumns: any[] = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()[0];
    }
    MakeOneLanguageFile(num) {
        const docs = DocumentApp.create("hoge");
    }
    /**
     * SetKeyColumnNumber
     */
    SetKeyColumnNumber(keyColNum) {
        this.m_keyColNum = keyColNum;
    }
    /**
     * SetLangColumnNumbers
     */
    SetLangColumnNumbers(langColNums) {
        this.m_langColNums = langColNums;
    }
    /**
     * DoWork
     */
    DoWork() {
        console.log("Do it!");
    }
}
