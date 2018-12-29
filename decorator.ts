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
class NewCar {

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

// method decorator
// property decorator
function editable(value: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor):any {
      descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function(target:any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}
class NewProject {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
      this.projectName = name;
  }

  // @editable(false)
  calcBudget() {
      console.log(1000);
  }
}

const project = new NewProject("Super Project");
project.calcBudget();
project.calcBudget = function () {
  console.log(2000);
};
project.calcBudget();
console.log(project);