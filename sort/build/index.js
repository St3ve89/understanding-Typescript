"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numbersCollection_1 = require("./numbersCollection");
var numbersCollection = new numbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
