import { MinifiedSymbolGenerator } from "./MinifiedSymbolGenerator";
import { DeclarationStatement } from "../statements/DeclarationStatement";
import { StatementMinifier } from "./StatementMinifier";

export class DeclarationStatementMinifier extends StatementMinifier<
  DeclarationStatement
> {
  constructor(statement: DeclarationStatement) {
    super(statement);
  }

  public minify(): string {
    return new DeclarationStatement(
      this.statement.AccessModifier,
      MinifiedSymbolGenerator.generateMinifiedSymbol()
    ).toString();
  }
}
