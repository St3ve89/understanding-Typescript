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
