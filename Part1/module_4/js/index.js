function indMinLengthOfThreeWords(a, b, c) {
  if (a.length < b.length && a.length < c.length) return a;
  else if (b.length < a.length && b.length < c.length) return b;
  else if (c.length < b.length && c.length < a.length) return c;
  else return a;
}

function getLongestOfThreeWords(a, b, c) {
  if (a.length > b.length && a.length > c.length) return a;
  else if (b.length > a.length && b.length > c.length) return b;
  else if (c.length > b.length && c.length > a.length) return c;
  else return a;
}

function filterOddElements(arr) {
  for (var i = 0; i < arr.length; i++) if (arr[i] % 2 == 0) console.log(arr[i]);
}

function getLengthOfShortestElement(a, b, c) {
  return indMinLengthOfThreeWords(a, b, c).length;
}

function joinArrayOfArrays(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length == 0) return 0;
  if (typeof arr[0] != "number") return 0;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) if (min > arr[i]) min = arr[i];
  return min;
}

function computeSummationToN(count) {
  let Sum = 0;
  for (let i = 1; i <= count; i++) Sum += i;
  return Sum;
}

function convertScoreToGrade(score) {
  if (score > 100 || score < 0) return "INVALID SCORE";
  if (score >= 90) return "A";
  else if (score >= 82) return "B";
  else if (score >= 75) return "C";
  else if (score >= 69) return "D";
  else if (score >= 60) return "E";
  else if (score >= 35) return "Fx";
  else if (score >= 0) return "F";
}

function multiply(num1, num2) {
  let Sum = 0;
  for (i = 1; i <= num1; i++) Sum += num2;
  return Sum;
}

function computeSumBetween(num1, num2) {
  let Sum = 0;
  if (num2 < num1) return 0;
  for (i = num1; i < num2; i++) Sum += i;
  return Sum;
}
console.log("Завдання 1:" + indMinLengthOfThreeWords("a", "be", "see"));
console.log("Завдання 2:");
filterOddElements([1, 2, 3, 4, 5]);
console.log("Завдання 3:" + getLengthOfShortestElement("a", "be", "see"));
console.log("Завдання 4:");
joinArrayOfArrays([[1, 4].concat([true, false], ["x", "y"])]);
console.log("Завдання 5:");
var arr = new Array();
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100);
  console.log(arr[i]);
}

console.log("Результат:" + findSmallestNumberAmongMixedElements(arr));
console.log("Завдання 6:" + computeSummationToN(6));
console.log("Завдання 7:" + convertScoreToGrade(91));
console.log("Завдання 8:" + getLongestOfThreeWords("a", "be", "see"));
console.log("Завдання 9:" + multiply(5, 6));
console.log("Завдання 10:" + computeSumBetween(2, 5));
