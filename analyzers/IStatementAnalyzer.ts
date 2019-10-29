import { ICodeIterator } from "../CodeIterator";
import { Statement } from "../statements/Statement";

export interface IStatementAnalyzer {
  analyze(iterator: ICodeIterator): Statement;
  shouldAnalyze(word: string): boolean;
  readonly name: string;
}
