/**
 * @file samawah_server.h
 * @brief
 * @author LiuToki
 * @date 2020-12-13
 *
 * Copyright (c) 2020 杜若.
 *
 */
/// <reference types="google-apps-script" />
/**
 * @description GAS でスプレッドシートにある翻訳データをjson データとして吐き出すクラス.
 * @export
 * @class CMakeLanguageJson
 */
export declare class CMakeLanguageJson {
    private m_sheet;
    private m_keyColNum;
    private m_langColNums;
    private m_rowDataStart;
    private m_folderId;
    /**
     * Creates an instance of CMakeLanguageJson.
     * @param sheet		翻訳データが書かれているシート.
     * @param folderId	json データを保存するGoogle Drive ディレクトリID
     */
    constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string);
    /**
     * @description		Initialize.
     * @param sheet		翻訳データが書かれているシート.
     * @param folderId	json データを保存するGoogle Drive ディレクトリID
     */
    Initialize(sheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string): void;
    /**
     * @description		json のkey がある列番号を設定.
     * @param keyColNum	key の列番号.
     */
    SetKeyColumnNumber(keyColNum: number): void;
    /**
     * @description			各種翻訳対象のvalue がある列番号を配列で設定.
     * @param langColNums	value の列番号配列.
     */
    SetLangColumnNumbers(langColNums: number[]): void;
    /**
     * @description			ファイル名が書かれている行(データの先頭行)を設定.
     * @param rowDataStart	先頭行番号.
     */
    SetRowDataStart(rowDataStart: number): void;
    /**
     * @description	各種設定をもとにお仕事をする.
     * @returns true: 成功, false: 失敗.
     */
    DoWork(): boolean;
    /**
     * @description	配列内の重複要素をチェック
     * @private
     * @param array	チェック対象配列.
     * @returns true: 重複あり, false: 重複なし.
     */
    private IsSameValueInArray;
    /**
     * @description			一つの翻訳json ファイルの作成.
     * @private
     * @param keys			スプレッドシートのkey 列の要素配列.
     * @param valueColNum	翻訳対象のvalue 列番号.
     * @param filename		出力ファイル名.
     * @returns true: 成功, false: 失敗.
     */
    private MakeOneLanguageFile;
    /**
     * @description		Googole Drive の指定ディレクトリにファイルを作成.
     * @private
     * @param filename	ファイル名.
     * @param contents	ファイルの中身.
     */
    private CreateJsonFileToGoogleDriveFolder;
}
