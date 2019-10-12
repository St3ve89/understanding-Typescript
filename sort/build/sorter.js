"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection /* TODO: fix me!!*/) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
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
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
