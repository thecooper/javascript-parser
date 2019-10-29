import { IStatement } from "./IStatement";
import { Statement } from "./Statement";

export class IfStatement implements IStatement {
  private expression;
  private bodyStatements;
  
  constructor(expression: string, bodyStatements: Statement[]) {
    this.expression = expression;
    this.bodyStatements = bodyStatements;
  }
  
  toString(): string {
    return "";
  }
}