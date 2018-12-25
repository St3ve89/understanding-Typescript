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