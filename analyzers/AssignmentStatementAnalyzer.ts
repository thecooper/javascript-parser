import { IStatementAnalyzer } from "./IStatementAnalyzer";
import { AssignmentStatement } from "../statements/AssignmentStatement";
import { ICodeIterator } from "../CodeIterator";
import { isKeyword } from "../isKeyword";
import { DeclarationStatement } from "../statements/DeclarationStatement";
import { Statement } from "../statements/Statement";

const assignmentTypeRegex = /^(let|const|var)/;

export class AssignmentStatementAnalyzer implements IStatementAnalyzer {
  get name(): string {
    return "AssignmentStatementAnalyzer";
  }
  
  analyze(iterator: ICodeIterator): Statement {
    let assignmentType = iterator.next(),
      variableName = iterator.next(),
      equalSign = iterator.next();

    if (!assignmentTypeRegex.test(assignmentType)) {
      variableName = assignmentType;
      const rhv = equalSign;

      return new AssignmentStatement(null, variableName, rhv);
    }

    if (!/\w+[\w\d]+/.test(variableName)) {
      throw new Error(
        `Assignment Statement analysis: expected variable name. Variable name provided: ${variableName}`
      );
    }

    if (equalSign !== "=") {
      if (variableName.indexOf(";") !== -1) {
        return new DeclarationStatement(assignmentType, variableName);
      }
    }

    const expressionParts = [];

    while (!iterator.isFinished && !isKeyword(iterator.peek())) {
      expressionParts.push(iterator.next());
    }

    const expression = expressionParts.join(" "); // TODO: expand this to return an expression statement object

    if (!expression) {
      throw new Error(
        "Assignment Statement analysis: expected expression statement"
      );
    }

    return new AssignmentStatement(assignmentType, variableName, expression);
  }

  shouldAnalyze(word: string): boolean {
    return assignmentTypeRegex.test(word);
  }
}
