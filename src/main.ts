// For GAS Library.
import { CMakeLanguageJson } from "./make-language-json";

export function CreateCMakeLanguageFile(spreadsheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string) : CMakeLanguageJson
{
	return new CMakeLanguageJson(spreadsheet, folderId);
}
