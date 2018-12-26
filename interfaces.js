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
