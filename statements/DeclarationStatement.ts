import { IStatement } from "./IStatement";

export class DeclarationStatement implements IStatement {
  public AccessModifier: string;
  public LeftHandValue: string;

  constructor(accessor = "", lhv = "") {
    this.AccessModifier = accessor;
    this.LeftHandValue = lhv;
  }

  toString() {
    return `${this.AccessModifier || ""} ${this.LeftHandValue}`.trim();
  }
}
