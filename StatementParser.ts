import { Statement } from "./statements/Statement";
import { AssignmentStatementAnalyzer } from "./analyzers/AssignmentStatementAnalyzer";
import { ICodeIterator } from "./CodeIterator";
import { IStatementAnalyzer } from "./analyzers/IStatementAnalyzer";
import { ExpressionStatementAnalyzer } from "./analyzers/ExpressionStatementAnalyzer";
import { AnalyzerFactory } from "./analyzers/AnalyzerFactory";

export class StatementParser {
  private iterator: ICodeIterator;
  private statements: Statement[] = [];
  private currentAnalyzer: IStatementAnalyzer = null;

  constructor(iterator: ICodeIterator) {
    this.iterator = iterator;
  }

  parse(): Statement[] {
    while (!this.iterator.isFinished) {
      if (this.currentAnalyzer === null) {
        this.currentAnalyzer = AnalyzerFactory.create(this.iterator.all);
      }

      this.statements.push(this.currentAnalyzer.analyze(this.iterator));
    }

    return this.statements;
  }
}
