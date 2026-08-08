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

## addItemToMenu
	menu = GASLibLoadVisaFile.addItemToMenu(menu, itemName);

### Description
Add a Visa item to an existing menu builder. Use the returned menu for subsequent additions, then call `addToUi()`.

### Parameters
Argument|Description
-|-
menu|Existing menu builder.
itemName|Item name in the menu.

### Returns
The menu builder with the Visa item added.

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

# Error handring
If an error occurs in the function, the Error object will be thrown.
So, you should use try ... catch.
