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
    newDeskArr.pop();  // remove last item
    newDeskArr.sort(); // sort remaining items 
    //
    // Move last item into first position:
    newDeskArr.unshift(newDeskArr.pop());
    // let lastItem = newDeskArr.pop();
    // newDeskArr.unshift(lastItem);
    //
    // Find the "USB drive" item in the array and move it into the last position:
    // Note:  It's important to fetch element 0 of the array returned
    //        by the splice method.  
    //        Otherwise, one appends/pushes an array onto the newDeskArr array!
    newDeskArr.push(newDeskArr.splice(newDeskArr.indexOf("USB drive"),1)[0]);
    //
    // Find the "laptop" item in the array and remove it:
    newDeskArr.splice(newDeskArr.indexOf("laptop"),1)

    // Your code ends here

    return newDeskArr;
};

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const chResult = processArray(exDeskArray);

console.log(`Challenge-result is:\n${chResult}`);
