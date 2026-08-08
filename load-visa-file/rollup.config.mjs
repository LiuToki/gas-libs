import { copyFile, mkdir } from "node:fs/promises";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/main.ts",
	output: {
		file: "dist/main.js",
		format: "iife",
		name: "GASLibLoadVisaFileBundle",
		footer: `
function addMenuToMenuBar(menuName, itemName) {
	return GASLibLoadVisaFileBundle.addMenuToMenuBar(menuName, itemName);
}

function addItemToMenu(menu, itemName) {
	return GASLibLoadVisaFileBundle.addItemToMenu(menu, itemName);
}

function visa() {
	return GASLibLoadVisaFileBundle.visa();
}

function callbackVisa(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne) {
	return GASLibLoadVisaFileBundle.callbackVisa(
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
					copyFile("src/formVisa.html", "dist/formVisa.html"),
				]);
			},
		},
	],
};
