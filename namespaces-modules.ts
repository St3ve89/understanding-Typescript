namespace MyMath {
  const PI = 3.14;
  
  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }
  
  export function calculateRectangle(width: number, length: number) {
    return width * length;
  }
}

const PI = 3.12;

console.log(MyMath.calculateRectangle(10,20));
console.log(MyMath.calculateCircumference(3));
console.log(PI);