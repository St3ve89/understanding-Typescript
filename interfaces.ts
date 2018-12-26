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

class anotherPerson implements NamedPerson {
  name: string;
  lastName: string;
  greet(lastName: string) {
    console.log('Hi, I am ' + this.name + ' ' + lastName)
  }
}

const myPerson = new anotherPerson();
myPerson.name = 'Agika';
myPerson.lastName = 'Brettl'
newgreet(myPerson);
myPerson.greet(myPerson.lastName)

// Function types

interface doubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: doubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2
}

console.log(myDoubleFunction(10, 20))

// Interface inheritance

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 29,
  name: 'Isti',
  greet(lastName: string) {
    console.log('Hello!')
  }
}

console.log(oldPerson)