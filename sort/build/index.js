"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var charactersCollection_1 = require("./charactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new charactersCollection_1.CharactersCollection('Xaayb');
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
