//  string
let myName = 'Istvan'
// myName = 28

//  number 
let age = 29;
// age = 'Istvan'

// boolean
let hasHobbies = true
// hasHobbies = 1

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ['cooking', 'sport'];
hobbies = [100]
console.log(typeof hobbies)

// tuples
let address: [string, number] = ['Superstreet', 99]

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 2// 2
}
let myColor: Color = Color.Blue
console.log(myColor)


// any 
let car: any = 'BMW'
console.log(car)
car = {brand: 'BMW', series: 3}
console.log(car)

// functions
function retunrMyName(): string {
  return myName
}
console.log(retunrMyName())

// void
function sayHello(): void {
  console.log('Hello!')
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 10))

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2))

// objects
let userData: { name: string,age: number } = {
  name: 'Istvan',
  age: 29
};

// userData = {
//   a: 'Hello',
//   b: 22
// }

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types

let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;


// check types
let finalValue = 30;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}