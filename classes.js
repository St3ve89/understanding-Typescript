var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 29;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old guy!');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Istvan", "steve");
console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy');  Won't work with private method
// Inheritance
var Istvan = /** @class */ (function (_super) {
    __extends(Istvan, _super);
    // name = 'Istvan';
    function Istvan(username) {
        var _this = _super.call(this, 'Istvan', username) || this;
        _this.age = 31;
        return _this;
    }
    return Istvan;
}(Person));
var istvan = new Istvan('Agi');
console.log(istvan);
