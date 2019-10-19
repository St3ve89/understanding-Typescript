"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchReader_1 = require("./matchReader");
var csvFileReader_1 = require("./csvFileReader");
var summary_1 = require("./summary");
var winsAnalysis_1 = require("./analyzers/winsAnalysis");
var htmlReport_1 = require("./reportTarget/htmlReport");
// create an object that statisfies the 'DataReader' interface
var csvFileReader = new csvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new matchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new summary_1.Summary(new winsAnalysis_1.WinsAnalysis('Man United'), new htmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
