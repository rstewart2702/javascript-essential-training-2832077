/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

// Just goes to show that "dot notation" is an analogous
// to using string-names inside the "bracket-accessing" notation.
// Makes "objects" which are rather like "dictionaries," i.e.,
// probably implemented as a hash table under the covers?
console.log(`backpack.pocketNum:  ${backpack["pocketNum"]}`); 
