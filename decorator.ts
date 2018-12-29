function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class NewPerson {
  constructor() {
    console.log('Hi!');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}
@logging(true)
@printable
class NewPlant {
  name = "Green Plant";
}
const newPlant = new NewPlant();
(<any>newPlant).print();