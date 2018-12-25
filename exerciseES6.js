// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var newGreet = function (name) {
    if (name === void 0) { name = "Istvan"; }
    console.log("Hello, " + name);
};
newGreet();
newGreet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var newNumbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, newNumbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
// Array.prototype.push.apply(newArray, newNumbers);
newArray.push.apply(newArray, newNumbers);
// const newArray2 = [...newNumbers,...newArray]
console.log(newArray);
// console.log(newArray2);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
