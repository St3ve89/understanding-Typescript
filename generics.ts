//  simple generic
function echo(data: any) {
  return data;
}

console.log(echo('Istvan'));
console.log(echo(29));
console.log(echo({name: 'Istvan', age: 29}));

// better generic function
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Istvan').length);
console.log(betterEcho<number>(29));
console.log(betterEcho({name: 'Istvan', age: 29}));

// built-in generics
const testResult: Array<number> =  [1.94 , 2.33];
testResult.push(-2.99);
// testResult.push("string");   Won't work
console.log(testResult);