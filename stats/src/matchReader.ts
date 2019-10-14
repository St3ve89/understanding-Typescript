import { CsvFileReader } from './csvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';

export class MatchReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
