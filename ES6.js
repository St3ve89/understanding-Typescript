// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; Won't work
//  Block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Manu');
// Default parameters
console.log("DEFAULT PARAMETERES");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
// Rest & spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('Istvan', 1, 2, 6));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ['Cooking', 'Sports'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
