import { Statement } from "./statements/Statement";
import { AssignmentStatement } from "./statements/AssignmentStatement";
import { IStatementAnalyzer } from "./analyzers/IStatementAnalyzer";
import { StatementParser } from "./StatementParser";
import { DeclarationStatement } from "./statements/DeclarationStatement";
import { MinifierFactory } from "./minifiers/MinifierFactory";

export class Minifier {
  private parser: StatementParser;

  constructor(parser: StatementParser) {
    this.parser = parser;
  }

  minify(): string {
    const statements = this.parser.parse();

    console.log("Statements parsed: ", statements);

    return statements
      .map(statement => MinifierFactory.Create(statement).minify())
      .filter(x => !!x)
      .reduce(
        (accumulator: string, currVal: string) => (accumulator += currVal),
        ""
      );
  }
}
