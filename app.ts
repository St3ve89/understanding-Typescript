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