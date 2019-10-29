import { StatementMinifier } from "./StatementMinifier";
import { ExpressionStatement } from "../statements/ExpressionStatement";

export class ExpressionStatementMinifier extends StatementMinifier<
  ExpressionStatement
> {
  constructor(statement: ExpressionStatement) {
    super(statement);
  }

  minify(): string {
    return this.statement.expression; // TODO: implement minification of expression symbols
  }
}
