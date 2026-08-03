import { copyFile, mkdir } from "node:fs/promises";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/main.ts",
	output: {
		file: "dist/main.js",
		format: "iife",
		name: "GASLibLoadAmexFile",
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
