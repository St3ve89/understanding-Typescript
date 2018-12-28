//  simple generic
function echo(data) {
    return data;
}
console.log(echo('Istvan'));
console.log(echo(29));
console.log(echo({ name: 'Istvan', age: 29 }));
// better generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Istvan').length);
console.log(betterEcho(29));
console.log(betterEcho({ name: 'Istvan', age: 29 }));
// built-in generics
var testResult = [1.94, 2.33];
testResult.push(-2.99);
// testResult.push("string");   Won't work
console.log(testResult);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
// generic types
var echo2 = betterEcho;
console.log(echo2('Something'));
// generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.caluclate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.caluclate());
