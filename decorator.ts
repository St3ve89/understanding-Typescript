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
<<<<<<< HEAD
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
=======
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

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}
class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if(printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course("Super course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
>>>>>>> ef4b1447118d485531d47f3c57517db97578f791
