 export class Sorter {
  constructor(public collection: /* TODO: fix me!!*/) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //type guard
        if (this.collection[j] > this.collection[j + 1]) {
          // reference to the element on the left hand side
          const leftHand = this.collection[j];
          // take the right hand side and throw over to left
          this.collection[j] = this.collection[j + 1];
          // take left hand side and throw to the right
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}
