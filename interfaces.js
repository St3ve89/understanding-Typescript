function newgreet(userPerson) {
    console.log('hello, ' + userPerson.name);
}
function changeName(userPerson) {
    userPerson.name = 'Agi';
}
var userPerson = {
    name: 'Istvan',
    hobbies: ['Cooking', 'Sports']
};
newgreet({ name: 'Istvan', age: 29 });
changeName(userPerson);
newgreet(userPerson);
