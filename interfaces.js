function newgreet(userPerson) {
    console.log('hello, ' + userPerson.name);
}
function changeName(userPerson) {
    userPerson.name = 'Agi';
}
var userPerson = {
    name: 'Istvan',
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    }
};
// newgreet({name: 'Istvan', age: 29});
changeName(userPerson);
newgreet(userPerson);
userPerson.greet('anything');
var anotherPerson = /** @class */ (function () {
    function anotherPerson() {
    }
    anotherPerson.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    };
    return anotherPerson;
}());
var myPerson = new anotherPerson();
myPerson.name = 'Agika';
myPerson.lastName = 'Brettl';
newgreet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 29,
    name: 'Isti',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(oldPerson);
