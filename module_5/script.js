function AreaOfRectAngle(x, y) {
  return x * y;
}

function AreaOfCircle(r) {
  return Math.PI * r * r;
}

function SquareRoot(x) {
  return Math.sqrt(x);
}

function ComputePower(x, y) {
  return Math.pow(x, y);
}

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// function GetLengthOfThreeWords(str) {
//   for (const item of str) {
//     console.log(item);
//   }
//   return item.split("").length;
// }

var output = AreaOfRectAngle(4, 8);
console.log("1.1:\t" + output);

var output = AreaOfCircle(4);
console.log("1.2:\t" + output);

var output = ComputePower(2, 3);
console.log("1.3:\t" + output);

var output = SquareRoot(9);
console.log("1.4:\t" + output);

// var output = GetLengthOfThreeWords("some", "other", "words");
// console.log("1.5:\t" + output);

var output = joinArrays([1, 2], [3, 4]);
console.log("1.6:\t[" + output + "]");
