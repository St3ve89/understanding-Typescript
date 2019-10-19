"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchReader_1 = require("./matchReader");
var csvFileReader_1 = require("./csvFileReader");
var matchResult_1 = require("./matchResult");
// create an object that statisfies the 'DataReader' interface
var csvFileReader = new csvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new matchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United win " + manUnitedWins + " games");
