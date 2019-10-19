import { MatchReader } from './matchReader';
import { CsvFileReader } from './csvFileReader';
import { MatchResult } from './matchResult';

// create an object that statisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
