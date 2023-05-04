<h1 align="center">balance-sheet-graph</h1>

<div align="center">
    <strong>The library for Google Apps Script that create balance sheet graph.</strong>
</div>

<br/>

<div align="center">
    <sub>
        This library load data and create graph to the spreadsheet.
    </sub>
</div>

<br/>

## How to use in Google Apps Script.
### Install

Script ID : 1zmRYdzeb2lIWei6nJJ8ETfo7ilTOFXRmfhryxTsSdKHVKt7uNdyET2lP

If you don't know how to use library, You look at this [link](https://developers.google.com/apps-script/guides/libraries).

### For example
You can load smbc card payment statement csv file downloading from (vpass)[https://www.smbc-card.com/mem/index.jsp].

The csv file is looks like this.
```csv
三井　住友　様,4980-1234-5678-9***,三井住友
2016/03/17,ショップ猫,3260,１,１,3260,
2016/04/01,ワンワン薬局,7200,１,１,3260,
```

And file encoding is <foct style="color:red;">"sjis".</font>

If you use this, you need something to do.

```javascript
// Add a menu to execute the function.
function onOpen()
{
	// The first argument is the name displayed in the menu bar.
	// The second argument is the name displayed in the menu item of the first argument.
	GASLibLoadVisaFile.addMenuToMenuBar("読込", "visa");
}

// Implement the callbackVisa function like this.
// This function call from Dialog, so be sure to implement with this function name and arguments.
function callbackVisa(formObject) {
	// The first argument specifies the argument of this function.
	// The second and subsequent arguments are individual settings.
	GASLibLoadVisaFile.callbackVisa(formObject, 8, 0, 1, 4, 7, 5, 6);
}
```

Then, the new item is added to the menu bar.

![menu_bar](./img/menu_bar.png)

When you click the visa item, following dialog is opened.

![dialog](./img/dialog.png)

Select your visa csv file and the month to extract.  
Then, push Submit button.  

If successful, <font style="color: blue">"Got it!"</font> Will be displayed.

## How to use in local with clasp and typescript.

### Install

Add to devDependencies code block in package.json

```json
	"devDependencies": {
		"@types/gas-lib-balance-sheet-graph": "github:LiuToki/gas-libs#balance-sheet-graph"
	}
```

Add to compilerOptions code block in tsconfig.json

```json
	"compilerOptions": {
		"types": ["gas-lib-balance-sheet-graph"]
	}
```

### For example
main.ts
```typescript
import { GASLibLoadVisaFile } from "gas-lib-load-visa-file";

function onOpen()
{
	GASLibLoadVisaFile.addMenuToMenuBar("読込", "visa");
}

function callbackVisa(formObject) {
	GASLibLoadVisaFile.callbackVisa(formObject, 8, 0, 1, 4, 7, 5, 6);
}
```

## [Function description](./docs/functions_description.md)

## Author
[LiuToki](https://github.com/LiuToki)

## License
[MIT](./LICENCE)
