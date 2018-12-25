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