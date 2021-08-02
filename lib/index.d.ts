/// <reference types="google-apps-script" />
import { CMakeLanguageJson } from "./make-language-json";
export declare namespace GASLibLangJsonMaker {
    /**
     * @description			Create new instance for CMakeLanguageJson.
     * @export
     * @param spreadsheet	翻訳データが書かれているシート.
     * @param folderId		json データを保存するGoogle Drive ディレクトリID
     * @returns new instance for CMakeLanguageJson.
     */
    function CreateCMakeLanguageJson(spreadsheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string): CMakeLanguageJson;
}
