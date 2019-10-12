"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    //type guard
                    if (this.collection[j] > this.collection[j + 1]) {
                        // reference to the element on the left hand side
                        var leftHand = this.collection[j];
                        // take the right hand side and throw over to left
                        this.collection[j] = this.collection[j + 1];
                        // take left hand side and throw to the right
                        this.collection[j + 1] = leftHand;
                    }
                }
                // if collection is a string, do this logic instead:
                if (typeof this.collection === 'string') {
                    //type guard
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
