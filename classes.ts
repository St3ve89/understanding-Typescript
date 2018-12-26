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