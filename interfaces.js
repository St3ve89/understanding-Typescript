function newgreet(userPerson) {
    console.log("hello, " + userPerson.name);
}
function changeName(userPerson) {
    userPerson.name = 'Agi';
}
var userPerson = {
    name: 'Istvan',
    age: 29
};
newgreet(userPerson);
changeName(userPerson);
newgreet(userPerson);
