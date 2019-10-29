import { AssignmentStatement } from "./AssignmentStatement";
import { DeclarationStatement } from "./DeclarationStatement";
import { UnknownStatement } from "./UnknownStatement";
import { ExpressionStatement } from "./ExpressionStatement";
import { Scope } from './Scope'

export type Statement =
  | AssignmentStatement
  | DeclarationStatement
  | UnknownStatement
  | ExpressionStatement
  | Scope;
