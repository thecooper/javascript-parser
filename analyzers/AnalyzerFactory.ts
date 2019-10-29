import { IStatementAnalyzer } from "./IStatementAnalyzer";
import { AssignmentStatementAnalyzer } from "./AssignmentStatementAnalyzer";
import { ExpressionStatementAnalyzer } from "./ExpressionStatementAnalyzer";
import { IfStatementAnalyzer } from "./IfStatementAnalyzer";

export class AnalyzerFactory {
  static Analyzers: IStatementAnalyzer[] = [
    new AssignmentStatementAnalyzer(),
    new IfStatementAnalyzer(),
    new ExpressionStatementAnalyzer() // This needs to be last
  ];

  static create(word: string): IStatementAnalyzer {
    for (const analyzer of AnalyzerFactory.Analyzers) {
      if (analyzer.shouldAnalyze(word)) {
        console.log(`Found analyzer "${analyzer.name}" for word: ${word}`)
        return analyzer;
      }
    }
  }
}
