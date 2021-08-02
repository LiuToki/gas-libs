// For GAS Library.
import { CMakeLanguageJson } from "./make-language-json";

/**
 * @description			Create new instance for CMakeLanguageJson.
 * @export
 * @param spreadsheet	翻訳データが書かれているシート.
 * @param folderId		json データを保存するGoogle Drive ディレクトリID
 * @returns new instance for CMakeLanguageJson.
 */
export function CreateCMakeLanguageJson(spreadsheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string) : CMakeLanguageJson
{
	return new CMakeLanguageJson(spreadsheet, folderId);
}
