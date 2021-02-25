function print(a) {
  return console.log(a);
}

function computeAreaOfARectangle(a, b) {
  return (a * b);
}

var out = computeAreaOfARectangle(4, 8);
print("computeAreaOfARectangle:");
print(out);

function computeAreaOfACircle(a) {
  return (3.14 * (a * a));
}

out = computeAreaOfACircle(4);
print("computeAreaOfACircle:");
print(out);


function computePower(a, b) {
  return Math.pow(a, b);
}

out = computePower(4, 2);
print("computePower:");
print(out);

function computeSquareRoot(a) {
  return Math.sqrt(a);
}

out = computeSquareRoot(4);
print("computeSquareRoot:");
print(out);

function getLengthOfThreeWords(a, b, c) {
  return a.length + b.length + c.length;
}

out = getLengthOfThreeWords("vbn", "qweqw", "fsd");
print("getLengthOfThreeWords:");
print(out);

function joinArrays(a, b) {
  return a.concat(b);
}

out = joinArrays([-2, 4, 8, 9], [3, 5, 1]);
print("joinArrays:");
print(out);

function getProductOfAllEIementsAtProperty(a, b) {
  let c = 1;
  let key = b;
  let arr = a[key];
  if (Array.isArray(arr) == false || arr.length == 0) { return 0 }
  for (let i = 0; i < arr.length; i++) {
      c *= arr[i];
  }
  return c;
}

var obj = {
  arr: [3, 4, 2],
  name: "john"
}

out = getProductOfAllEIementsAtProperty(obj, "arr");
print("getProductOfAllEIementsAtProperty:");
print(out);

function sumDigits(a) {
  let sum = a
      .toString()
      .split('')
      .map(Number)
      .reduce(function (a, b) {
          return a + b;
      }, 0);
  return sum;
}

out = sumDigits(1233);
print("sumDigits:");
print(out);

function findShortestWordAmongMixedElements(arr) {
  if (arr.length < 1) {
      return 0;
  }
  let n = arr.length;
  let lengh;
  for (let i = 0; i < n; i++) {
      if (typeof (arr[i]) === 'string') {
          if (lengh === undefined) {
              lengh = arr[i];
          }
          if (lengh > arr[i]) {
              lengh = arr[i];
          }
      }
  }
  if (typeof (lengh) === undefined) { return 0 }
  return lengh;
}

out = findShortestWordAmongMixedElements([1233, "to", true, 'q', 'wqe', false]);
print("findShortestWordAmongMixedElements:");
print(out);

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length < 1) {
      return 0;
  }
  let n = arr.length;
  let lengh;
  for (let i = 0; i < n; i++) {
      if (typeof (arr[i]) === 'number') {
          if (lengh === undefined) {
              lengh = arr[i];
          }
          if (lengh > arr[i]) {
              lengh = arr[i];
          }
      }
  }
  if (typeof (lengh) === undefined) { return 0 }
  return lengh;
}
array = ['sdfsdf', 3, 9, "fsd", 2, false, 1, 5, 7];
out = findSmallestNumberAmongMixedElements(array);
print("findSmallestNumberAmongMixedElements");
print(out);

function modulo(a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') { return NaN }
  while (a >= b) {
      a -= b;
  }
  return a
}

out = modulo(12, 5);
print("modulo:");
print(out);

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

function fillEveryNChars(a, b) {
  let arr = [];
  let c = 0;
  let d = b;
  let n = a.length / b;
  let revArr = [];
  let join = "";
  let temp = "";
  for (let i = 0; i < n; i++) {
      arr[i] = a.slice(c, d);
      revArr[i] = reverseString(arr[i]);
      temp = revArr[i];
      join += temp;
      c += b;
      d += b;
  }
  return join;
}

out = fillEveryNChars("a short example", 5);
print("fillEveryNChars:");
print(out);

function findPairsForSum(a, b) {
  let str;
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
          if (a[i] + a[j] == b) {
              return str = ("[" + a[i] + "," + a[j] + "] = " + b);
          }
      }
  }
}

out = findPairsForSum([3, 5, 2, 4, 7], 5);
print("findPairsForSum:");
print(out);

function isMirrorReflection(a, b) {
  return a == reverseString(b) ? true : false;
}

out = isMirrorReflection("hello", "olleh");
print("isMirrorReflection:");
print(out);

function searchNum(a, b) {
  let str;
  for (let i = 0; i < a.length; i++) {
      if (a[i] == b) { return i }
  }
  return str = ("No such number in array.");
}

out = searchNum([3, 7, 3, 10, 31, 54, 13], 31);
print("searchNum:");
print(out);

function isIsogram(a) {
  let arr = [];
  let n = a.length;
  let res;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
      arr = a.split('');
  }
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
              cnt++
          } else { continue; }
      }
  }
  if (cnt == a.length) {
      return res = "Word is isogrma";
  } else {
      return res = "Word is not isogram.";
  }
}


out = isIsogram("exampl");
print("isIsogram:");
print(out);

function checkPalindrom(a) {
  return a == a.split('').reverse().join('');
}

out = checkPalindrom("helloolleh");
print("checkPalindrom:");
print(out);