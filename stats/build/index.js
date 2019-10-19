"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchReader_1 = require("./matchReader");
var csvFileReader_1 = require("./csvFileReader");
// create an object that statisfies the 'DataReader' interface
var csvFileReader = new csvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new matchReader_1.MatchReader(csvFileReader);
matchReader.load();
