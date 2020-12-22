// For typescript Library.
import { CMakeLanguageJson } from "./make-language-json";

export namespace GASLibLangJsonMaker {
	export function CreateCMakeLanguageJson() : CMakeLanguageJson {
		return new CMakeLanguageJson();
	}
}