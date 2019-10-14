"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvFileReader_1 = require("./csvFileReader");
var matchResult_1 = require("./matchResult");
var reader = new csvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United win " + manUnitedWins + " games");
