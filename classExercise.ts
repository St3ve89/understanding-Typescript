// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }
 
    honk() {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
const newCar = new Car("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(20);
console.log(newCar.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length
  }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class newPerson {
  private _firstname: string = '';

  get firstName() {
    return this._firstname
  }

  set firstName(value: string) {
    if(value.length > 3) {
      this._firstname = value;
    } else {
      this._firstname = '';
    }
  }
}

const newperson = new newPerson();
console.log(newperson.firstName);
newperson.firstName = "Ma";
console.log(newperson.firstName);
newperson.firstName = "Maximilian";
console.log(newperson.firstName);
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);