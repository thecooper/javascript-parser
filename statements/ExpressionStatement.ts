import { IStatement } from "./IStatement";

export class ExpressionStatement implements IStatement {
  public expression: string;

  constructor(exp: string) {
    this.expression = exp;
  }

  toString() {
    return this.expression;
  }
}
