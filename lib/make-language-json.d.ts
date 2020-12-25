/*!
 * @file samawah_server.h
 * @brief
 * @author LiuToki
 * @date 2020-12-13
 *
 * Copyright (c) 2020 杜若.
 *
 */
/// <reference types="google-apps-script" />
export declare class CMakeLanguageJson {
    private m_sheet;
    private m_keyColNum;
    private m_langColNums;
    private m_rowDataStart;
    private m_folderId;
    constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string);
    Initialize(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string): void;
    /**
     * SetKeyColumnNumber
     */
    SetKeyColumnNumber(keyColNum: number): void;
    /**
     * SetLangColumnNumbers
     */
    SetLangColumnNumbers(langColNums: number[]): void;
    /**
     * SetRowDataStart
     */
    SetRowDataStart(rowDataStart: number): void;
    /**
     * DoWork
     */
    DoWork(): boolean;
    private MakeOneLanguageFile;
    private CreateJsonFileToGoogleDriveFolder;
}
