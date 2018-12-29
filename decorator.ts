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

// method decorator
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

class NewProject {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const newNewProject = new NewProject("Super project");
newNewProject.calcBudget();
newNewProject.calcBudget = function() {
  console.log(2000);
}
newNewProject.calcBudget();
