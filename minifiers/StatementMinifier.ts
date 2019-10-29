import { Statement } from "../statements/Statement";
export abstract class StatementMinifier<TStatement = Statement> {
  protected statement: TStatement;

  constructor(statement: TStatement) {
    this.statement = statement;
  }

  abstract minify(): string;
}
