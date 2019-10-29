import { IStatement } from "./IStatement";

export class AssignmentStatement implements IStatement {
  public AccessModifier: string;
  public LeftHandValue: string;
  public RightHandValue: any;

  constructor(accessor = "", lhv = "", rhv = "") {
    this.AccessModifier = accessor;
    this.LeftHandValue = lhv;
    this.RightHandValue = rhv;
  }

  toString() {
    return `${this.AccessModifier || ""} ${this.LeftHandValue} = ${
      this.RightHandValue
    }`.trim();
  }
}
