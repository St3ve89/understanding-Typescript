//  string
var myName = 'Istvan';
// myName = 28
//  number 
var age = 29;
// age = 'Istvan'
// boolean
var hasHobbies = true;
// hasHobbies = 1
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['cooking', 'sport'];
hobbies = [100];
console.log(typeof hobbies);
// tuples
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
