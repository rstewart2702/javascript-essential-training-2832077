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
  // anotherMethod: function (param1) {
  // 	console.log(`This is the param1 passed to anotherMethod:  ${param1}`);
  // },
  // Just goes to show that one may certainly define "methods"
  // via lambdas, i.e., "anonymous functions":
  anotherMethod: (param1) => {
    console.log(`This is the param1 passed to anotherMethod:  ${param1}`);
    return null;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
