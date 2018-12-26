class Person {
  name: string;
  private type: string;
  protected age: number = 29;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age)
    this.setType('Old guy!')
  }

  private setType(type: string) {
    this.type = type
    console.log(this.type)
  }
}

const person = new Person("Istvan", "steve");
console.log(person.name, person.username)
person.printAge();
// person.setType('Cool guy');  Won't work with private method

// Inheritance
class Istvan extends Person {
  // name = 'Istvan';

  constructor(username: string) {
    super('Istvan', username);
    this.age = 31;
  }
}

const istvan = new Istvan('Agi');
console.log(istvan)


// Getters & setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if(value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// Static properties & methods
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project{
  changeName(name: string): void {
    this.projectName = name;
  };
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);

// private constructor
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The only one');
    }

    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('The only one');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else'