function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class NewPerson {
  constructor() {
    console.log('Hi!')
  }
}