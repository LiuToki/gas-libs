import { copyFile, mkdir } from "node:fs/promises";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/main.ts",
	output: {
		file: "dist/main.js",
		format: "iife",
		name: "GASLibLoadAmexFileBundle",
		footer: `
function addMenuToMenuBar(menuName, itemName) {
	return GASLibLoadAmexFileBundle.addMenuToMenuBar(menuName, itemName);
}

function addItemToMenu(menu, itemName) {
	return GASLibLoadAmexFileBundle.addItemToMenu(menu, itemName);
}

function amex() {
	return GASLibLoadAmexFileBundle.amex();
}

function callbackAmex(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne) {
	return GASLibLoadAmexFileBundle.callbackAmex(
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
					copyFile("src/formAmex.html", "dist/formAmex.html"),
				]);
			},
		},
	],
};
