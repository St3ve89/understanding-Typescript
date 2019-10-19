import { MatchReader } from './matchReader';
import { CsvFileReader } from './csvFileReader';
import { Summary } from './summary';
import { WinsAnalysis } from './analyzers/winsAnalysis';
import { ConsoleReport } from './reportTarget/consoleReport';
import { HtmlReport } from './reportTarget/htmlReport';

// create an object that statisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
