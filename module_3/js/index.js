function str_del() {
  selection = window.getSelection().toString();
  var str = document.getElementById("elem").textContent;
  var start = str.indexOf(selection);
  var end = start + selection.length;
  var result = str.slice(0, start) + str.slice(end);
  document.getElementById("elem").textContent = result;
}

function getProperty() {
  var obj = {
    key: "value",
  };
  var output = getProperty(obj, "key");
  console.log(output);
}

function addProperty() {
  var myObj = {};
  addProperty(myObj, "myProperty");
  console.log(myObj.myProperty);
}

function removeProperty() {
  var obj = {
    mane: "Sam",
    age: 20,
  };
  removeProperty(obj, "name");
  console.log(obj.name);
}

function getFullName() {
  var output = getFullName("Joe", "Smith");
  console.log(output);
}

function getLengthOfWord() {
  var output = getLengthOfWord("some");
  console.log(output);
}

function getLengthOfTwoWords() {
  var output = getLengthOfTwoWords("some", "words");
  console.log(output);
}

function isEven() {
  var output = isEven(11);
  console.log(output);
}

function isGreaterThan() {
  var output = isGreaterThan(11);
  console.log(output);
}

function isSameLength() {
  var output = isSameLength("words", "super");
  console.log(output);
}

function isEvenAndGreaterThanTen() {
  var output = isEvenAndGreaterThanTen(13);
  console.log(output);
}
