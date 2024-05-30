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
    const content = `
    <h1>${everydayPack.name}</h1>
    <ul>
        <li>Volume:<span> ${everydayPack.volume}l</span></li>
        <li>Color:<span> ${everydayPack.color}</span></li>
        <li>Age:<span> ${everydayPack.dateAcquired} days old</span></li>
        <li>Number of pockets:<span> ${everydayPack.pocketNum}</span></li>
    </ul>
    `;
    return content;
}
// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const backpacksMarkupArray = createBackpackMarkup(document)
// Combine the array items into a single output.
const result = backpacksMarkupArray.reduce((combinedHTML, backpack) => {
    return combinedHTML + backpack.outerHTML;
}, '');




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
