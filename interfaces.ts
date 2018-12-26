interface NamedPerson {
  name: string;
  age?: number;
  [propName: string]: any;
}

function newgreet(userPerson: NamedPerson) {
  console.log('hello, ' + userPerson.name);
}

function changeName(userPerson: NamedPerson) {
  userPerson.name = 'Agi'
}

const userPerson = {
  name: 'Istvan',
  hobbies: ['Cooking', 'Sports']
};

newgreet({name: 'Istvan', age: 29});
changeName(userPerson);
newgreet(userPerson);