import { copyFile, mkdir } from "node:fs/promises";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/main.ts",
	output: {
		file: "dist/main.js",
		format: "iife",
		name: "GASLibLoadJREFileBundle",
		footer: `
function addMenuToMenuBar(menuName, itemName) {
	return GASLibLoadJREFileBundle.addMenuToMenuBar(menuName, itemName);
}

function addItemToMenu(menu, itemName) {
	return GASLibLoadJREFileBundle.addItemToMenu(menu, itemName);
}

function jre() {
	return GASLibLoadJREFileBundle.jre();
}

function callbackJRE(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne) {
	return GASLibLoadJREFileBundle.callbackJRE(
		formObject,
		colNum,
		colDate,
		colName,
		colAmount,
		colRemarks,
		colCard,
		colOne
	);
}
`,
	},
	plugins: [
		typescript({ tsconfig: "./tsconfig.rollup.json" }),
		{
			name: "copy-gas-files",
			async writeBundle() {
				await mkdir("dist", { recursive: true });
				await Promise.all([
					copyFile("src/appsscript.json", "dist/appsscript.json"),
					copyFile("src/formJRE.html", "dist/formJRE.html"),
				]);
			},
		},
	],
};
