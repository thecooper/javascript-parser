import { Statement } from "../statements/Statement";
import { AssignmentStatement } from "../statements/AssignmentStatement";
import { AssignmentStatementMinifier } from "./AssignmentStatementMinifier";
import { DeclarationStatement } from "../statements/DeclarationStatement";
import { DeclarationStatementMinifier } from "./DeclarationStatementMinifier";
import { ExpressionStatement } from "../statements/ExpressionStatement";
import { ExpressionStatementMinifier } from "./ExpressionStatementMinifier";

export class MinifierFactory {
  static Create(statement: Statement) {
    if (statement instanceof AssignmentStatement) {
      return new AssignmentStatementMinifier(statement);
    } else if (statement instanceof DeclarationStatement) {
      return new DeclarationStatementMinifier(statement);
    } else if (statement instanceof ExpressionStatement) {
      return new ExpressionStatementMinifier(statement);
    } else {
      return null;
    }
  }
}
