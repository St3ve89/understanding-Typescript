// let & const
console.log("LET & CONST")
let variable = "Test";
console.log(variable);
variable = "Another value"
console.log(variable);

const maxLevel = 100;
console.log(maxLevel)
// maxLevel = 99; Won't work

//  Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset()
console.log(variable);

// Arrow functions
console.log("ARROW FUNCTIONS")
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3))

const greet = () => {
  console.log("Hello!")
};
greet();

const greetFriend = (friend: string) => console.log(friend)
greetFriend('Manu')

// Default parameters
console.log("DEFAULT PARAMETERES");
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start --;
  }
  console.log("Done!", start);
}
countdown(20);

// Rest & spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
  return args;
}
console.log(makeArray('Istvan',1,2,6));

// Destructuring
console.log("DESTRUCTURING")
const myHobbies = ['Cooking', 'Sports'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies
console.log(hobby1, hobby2);
