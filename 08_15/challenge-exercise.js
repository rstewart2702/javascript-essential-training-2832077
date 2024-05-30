// JavaScript code​​​​​​‌​‌‌​​‌‌​​​​​​​​‌‌‌​‌​​‌​ below
// Change these values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false
const showHints = false

// Set up the Backpack class
class Backpack {
    constructor(
        id,
        name,
        volume,
        color,
        pocketNum,
        dateAcquired
    ) {
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.dateAcquired = dateAcquired;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }

}

// Create new Backpack object
const everydayPack = new Backpack(
    "pack01",
    "Everyday Backpack",
    30,
    "grey",
    15,
    "December 5, 2018 15:00:00 PST"
);

// Create new Backpack object
const frogPack = new Backpack(
    "pack02",
    "Frog Backpack",
    8,
    "green",
    3,
    "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

function createBackpackMarkup(document) {
    // Replace the code below with the correct solution:
    //
    // Used to derive the pack contents, per backpack:
    let fcnPckContent =
	(backpackItm) => {
	    return `
	    <h1>${backpackItm.name}</h1>
	    <ul>
		<li>Volume:<span> ${backpackItm.volume}l</span></li>
		<li>Color:<span> ${backpackItm.color}</span></li>
		<li>Age:<span> ${backpackItm.backpackAge()} days old</span></li>
		<li>Number of pockets:<span> ${backpackItm.pocketNum}</span></li>
	    </ul>`;
	}
    // The objective:  produce "serialized HTML fragments,"
    // which implies that "real" HTML elements should be produced,
    // the real data structure as opposed to the "flat" HTML text
    // (which would have to be re-parsed, etc, right?)
    let content = Array();
    let pageElement = null;
    backpackObjectArray.forEach(
	(itm) => {
	    pageElement = document.createElement("article");
	    pageElement.id = itm.id;
	    pageElement.innerHTML = fcnPckContent(itm);
	    // console.log(pageElement.outerHTML);
	    content.push(pageElement.outerHTML);
	}
    );
    console.log(content);
    return content; // thus content is an Array containing "article Element objects."
}
// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const backpacksMarkupArray = createBackpackMarkup(document)
// Combine the array items into a single output.
const result = backpacksMarkupArray.reduce((combinedHTML, backpack) => {
    return combinedHTML + backpack.outerHTML;
}, "");

console.log(result)

// The following "squirts" into the page's own structure the
// "article objects" just derived and stored into the backpacksMarkupArray,
// whose name is kind of misleading, for it is an array of
// HTML page objects which've already been "marked up" as far as
// I am concerned.
backpacksMarkupArray.forEach((itm) => { document.body.append(itm); });
// document.body.appendChild(backpackListElt);


/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

// const article = document.querySelector("article");
// let stuffList = document.createElement("ul");

// // forEach() array method
// stuff.forEach((item) => {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = item;
//   stuffList.append(listItem);
// });

// article.append(stuffList)
