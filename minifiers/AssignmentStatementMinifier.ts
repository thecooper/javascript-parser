import { MinifiedSymbolGenerator } from "./MinifiedSymbolGenerator";
import { AssignmentStatement } from "../statements/AssignmentStatement";
import { StatementMinifier } from "./StatementMinifier";

export class AssignmentStatementMinifier extends StatementMinifier<
  AssignmentStatement
> {
  constructor(statement: AssignmentStatement) {
    super(statement);
  }

  public minify(): string {
    return new AssignmentStatement(
      this.statement.AccessModifier,
      MinifiedSymbolGenerator.generateMinifiedSymbol(),
      this.statement.RightHandValue
    ).toString();
  }
}
