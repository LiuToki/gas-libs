# Function description
All item is under the GASLibLoadAmexFile namespace.

## addMenuToMenuBar
	GASLibLoadAmexFile.addMenuToMenuBar(menuName, itemName);

### Description
Setup for menu bar, please calling onOpne.

### Parameters
Argument|Description
-|-
menuName|Menu name for menu bar.
itemName|Item name in the menu name.

## addItemToMenu
	GASLibLoadAmexFile.addItemToMenu(menu, itemName);

### Description
Add an Amex item to an existing menu builder. Call `addToUi()` after all items have been added to the menu.

### Parameters
Argument|Description
-|-
menu|Existing menu builder.
itemName|Item name in the menu.

### Returns
The menu builder with the Amex item added.

## callbackAmex
	GASLibLoadAmexFile.callbackAmex(formObject, colNum, colDate, colName, colAmount, colRemarks, colCard, colOne);

### Description
Process amex csv file.

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

## amex
No need to call from user code.  
This function is called automatically when you select a SpreadSheet menu item.

# Error handring
If an error occurs in the function, the Error object will be thrown.
So, you should use try ... catch.
