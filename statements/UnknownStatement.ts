import { IStatement } from "./IStatement";

export class UnknownStatement implements IStatement {
  toString() {
    return "";
  }
}
