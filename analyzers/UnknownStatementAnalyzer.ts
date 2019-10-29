import { IStatementAnalyzer } from "./IStatementAnalyzer";
import { ICodeIterator } from "../CodeIterator";
import { Statement } from "../statements/Statement";
import { UnknownStatement } from "../statements/UnknownStatement";

export class UnknownStatementAnalyzer implements IStatementAnalyzer {
  analyze(_: ICodeIterator): Statement {
    return new UnknownStatement();
  }

  shouldAnalyze(word: string): boolean {
    return true;
  }
}
