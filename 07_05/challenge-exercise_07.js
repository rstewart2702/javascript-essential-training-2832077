// JavaScript code​​​​​​‌​‌‌​​‌​‌‌‌​‌​​​‌​‌‌‌​‌‌‌ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
const showExpectedResult = false;
const showHints = false;

const exDeskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // Your code goes here
    newDeskArr.pop();
    newDeskArr.sort();
    let lastItem = newDeskArr.pop();
    newDeskArr.unshift(lastItem);
    let usbIdx = newDeskArr.findIndex((itm)=>(itm == "USB drive"));
    usbItm = newDeskArr[usbIdx];
    newDeskArr.splice(usbIdx,1);
    newDeskArr.push(usbItm);
    newDeskArr.splice(
        newDeskArr.findIndex((itm)=>(itm == "laptop")),
        1);

    // Your code ends here

    return newDeskArr;
};

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const chResult = processArray(exDeskArray);

console.log(`Challenge-result is:\n${chResult}`);
