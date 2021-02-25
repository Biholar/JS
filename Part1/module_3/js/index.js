function str_del() {
    var str = document.getElementById("elem").innerHTML;
    document.getElementById("elem").innerHTML = str.substring(0, str.length - 1);
}

function getProperty(obj, key) {
    return obj[key];
}

var obj = {
    key: 'value'
};

function addProperty(myObj, property) {
    myObj[property] = 'моя властивість';
}

function removeProperty(obj, property) {
    delete obj[property];
}

function getFullName(surn, name) {
    return surn.concat(' ', name);
}

function getLengthOfWord(str) {
    return str.length;
}

function getLengthOfTwoWord(str1, str2) {
    return getLengthOfWord(str1) + getLengthOfWord(str2);
}

function isGreaterThan(num1, num2) {
    if (num1 < num2) return true;
    else return false;
}

function isEven(num) {
    if (num % 2 == 0) return true;
    else return false;
}

function isSameLength(str1, str2) {
    if (str1.length == str2.length) return true;
    else return false;
}

function isEvenAndGreaterThanTen(num) {
    if (isEven(num) == true & num > 10) return true;
    else return false;
}

function computeAreaOfATriangle(length, height) {
    return (length * height) / 2;
}
var myObj = {};
console.log('5.2.1:' + getProperty(obj, 'key'));
addProperty(myObj, 'myProperty');
console.log('5.2.2:' + myObj.myProperty);

var obj1 = {
    name: 'Sam',
    age: 20
}

removeProperty(obj1, 'name');
console.log('5.2.3:' + obj1.name);



console.log('5.2.4:' + getFullName('Joe', 'Smith'));

console.log('5.2.5:' + getLengthOfWord('some'));

console.log('5.2.6:' + getLengthOfTwoWord('some', 'words'));

console.log('5.2.7:' + isGreaterThan(11, 10));

console.log('5.2.8:' + isEven(11));

console.log('5.2.9:' + isSameLength('words', 'super '));

console.log('5.2.10:' + isEvenAndGreaterThanTen(13));

console.log('5.2.11:' + computeAreaOfATriangle(4, 6));