# DnD Instant Initiative

## What is it?
Instant Initiative is an initiative tracker for DnD 5e created as a side project.

## Why should I use it?
I created this for me and my friends to use. I wanted a little more flexibility than the basic tools available but I was not interested in the super complex tools that integrate all the DnD SRD and monster data. If you are looking for a tool in-between - this is for you!

## Features (TL;DR)
+ Track multiple actors by initiative
+ Randomize initiative rolls (d20 supported);
+ View total elapsed turns and the current actor's turn
+ Support for all basic character attributes
+ Notes area
+ "Quick Create" random enemies with full stats (3 difficulty tiers)
+ Export page data into a code you can paste back in to import at any time

## Advanced Importing
You can create/edit import code to add your own actors manually (this is probably more work than creating them with the tool).
The import text must always start with a settings value (0-3) followed by the custom delimiter ```&|```. You must also use this delimiter to separate mutiple actors.
If you are unsure, begin your input code with ```1&|``` or try exporting to see an example.

###### Actor Syntax
```javascript
{"cid":1,"name":"Legend Enemy 1","init":8,"ac":25,"str":17,"dex":15,"con":24,"int":14,"wis":17,"cha":23,"hp":432,"notes":""}
```

###### Settings Value
*0 - Delete Confirmation == FALSE & CLEAR AFTER ADD == FALSE
*1 - Delete Confirmation == TRUE & CLEAR AFTER ADD == FALSE
*2 - Delete Confirmation == TRUE & CLEAR AFTER ADD == TRUE
*3 - Delete Confirmation == FALSE & CLEAR AFTER ADD == TRUE

## Possible updates
+ Create actor with CSV input
+ ~Save current page data~ Completed!
+ Other things I have thought about but since forgotten

## Ingredients
This tool is coded mainly in JavaScript (it's probably inefficient as this was a fun project), with HTML and CSS.

## Known Issues
~I think there's a small bug in the position tracking in certain instances.~ This should be fixed

## Suggestions?
Reach out to me at twongersdev@gmail.com or post here on GitHub
