import { IStatement } from "./IStatement";
import { Statement } from "./Statement";

export class Scope implements IStatement {
  public statements: Statement[];
}