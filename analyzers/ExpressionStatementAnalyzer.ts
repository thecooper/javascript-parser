import { IStatementAnalyzer } from "./IStatementAnalyzer";
import { Statement } from "../statements/Statement";
import { ICodeIterator } from "../CodeIterator";
import { isKeyword } from "../isKeyword";
import { ExpressionStatement } from "../statements/ExpressionStatement";
import { AssignmentStatementAnalyzer } from "./AssignmentStatementAnalyzer";

export class ExpressionStatementAnalyzer implements IStatementAnalyzer {
  get name(): string {
    return "ExpressionStatementAnalyzer";
  }
  
  analyze(iterator: ICodeIterator): Statement {
    return new ExpressionStatement(iterator.getWordsUntilSemiColon().join(" "));
  }

  shouldAnalyze(_: string): boolean {
    return true;
  }
}
