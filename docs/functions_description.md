# Function description
All item is under the GASLibLoadVisaFile namespace.

## addMenuToMenuBar
	GASLibLoadVisaFile.addMenuToMenuBar(menuName, itemName);

### Description
Setup for menu bar, please calling onOpne.

### Parameters
Argument|Description
-|-
menuName|Menu name for menu bar.
itemName|Item name in the menu name.

## callbackVisa
	GASLibLoadVisaFile.callbackVisa(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne);

### Description
Process visa csv file.

### Parameters
Argument|Description
-|-
formObject|formObject from callback.
colNum|Number of column.
colDate|Insert date column.
colName|Insert name column.
colAmount|Insert amount of money column.
colRemarks|Insert remarks column.
colCard|Insert "カード" column.
colOne|Insert "1" column.

## visa
No need to call from user code.  
This function is called automatically when you select a SpreadSheet menu item.

