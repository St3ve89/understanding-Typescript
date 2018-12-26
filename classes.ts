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