interface NamedPerson {
  name: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function newgreet(userPerson: NamedPerson) {
  console.log('hello, ' + userPerson.name);
}

function changeName(userPerson: NamedPerson) {
  userPerson.name = 'Agi'
}

const userPerson: NamedPerson = {
  name: 'Istvan',
  hobbies: ['Cooking', 'Sports'],
  greet(lastName: string) {
    console.log('Hi, I am ' + this.name + ' ' + lastName);
  }
};

// newgreet({name: 'Istvan', age: 29});
changeName(userPerson);
newgreet(userPerson);
userPerson.greet('anything');