import { Sorter } from './sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    // reference to the element on the left hand side
    const leftHand = this.data[leftIndex];
    // take the right hand side and throw over to left
    this.data[leftIndex] = this.data[rightIndex];
    // take left hand side and throw to the right
    this.data[rightIndex] = leftHand;
  }
}
