interface NamedPerson {
  name: string;
}

function newgreet(userPerson: NamedPerson) {
  console.log("hello, " + userPerson.name);
}

function changeName(userPerson: NamedPerson) {
  userPerson.name = 'Agi'
}

const userPerson = {
  name: 'Istvan',
  age: 29
};

newgreet(userPerson);
changeName(userPerson);
newgreet(userPerson);