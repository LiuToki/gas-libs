// For typescript Library.

import { CMakeLanguageJson } from "./make-language-json";

export namespace GASLibLangJsonMaker {
	export function CreateCMakeLanguageJson(spreadsheet: GoogleAppsScript.Spreadsheet.Sheet, folderId: string) : CMakeLanguageJson
	{
		return new CMakeLanguageJson(spreadsheet, folderId);
	}
}