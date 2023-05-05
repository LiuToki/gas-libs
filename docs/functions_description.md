# Function description
All item is under the GASLibLoadVisaFile namespace.

## addMenuToMenuBar
	GASLibLoadVisaFile.createBalanceSheetGraph(years, currectAssets, intansibleAssets, currentLiabilities, longTermLiabilities, stockholdersEquitys, graphTitle, vAxisTitle, newSheet);

### Description
Create stacked graph for year-to-year comparison of balance sheet contents.

### Parameters
Argument|Description
-|-
years|Ranges for years. First column is title.
currectAssets|Ranges for Current Assets. First column is title.
intansibleAssets|Ranges for Instansible Assets. First column is title.
currentLiabilities|Ranges for Current Liabilities. First column is title.
longTermLiabilities|Ranges for Long-Term Liabilities. First column is title.
stockholdersEquitys|Ranges for Stockholders Equitys. First column is title.
graphTitle|graph title.
vAxisTitle|verticle axis title.
newSheet|true: Create Graph to New Sheet(sheet name is same as graph name), false: Create Graph to the Active Sheet.
