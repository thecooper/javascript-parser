import { IStatementAnalyzer } from "./IStatementAnalyzer";
import { ICodeIterator } from "../CodeIterator";
import { Statement } from "../statements/Statement";
import { IfStatement } from "../statements/IfStatement";
import { Scope } from "../statements/Scope";
import { StatementParser } from "../StatementParser";

export class IfStatementAnalyzer implements IStatementAnalyzer {
  get name(): string {
    return "IfStatementAnalyzer";
  }
  
  analyze(iterator: ICodeIterator): Statement {
    let booleanExpression: string = "", bodyStatements: Statement[] = [];

    iterator.next(2); // Skip if keyword
    
    while (!iterator.isFinished && iterator.peek() !== ")") {
      booleanExpression += iterator.next();
    }

    let symbol: string, expression: string = "", expressionsContentStack: string[];

    console.log("Building expression inside of curly braces");
    
    do {
      symbol = iterator.next();

      if(symbol === "") {
        continue;
      } else if (symbol === "{") {
        continue; // Figure out how to process scopes;
      } else if (symbol === "}") {
        // scope end, process expressions up to this point
        expressionsContentStack.push(expression);
        expression = "";
        break;
      } else {
        expression += symbol;
      }
    } while (!iterator.isFinished && iterator.next() != "{");
    
    while(expressionsContentStack.length > 0) {
      const scope = new Scope();
      const parser = new StatementParser(iterator);
      scope.statements = parser.parse();
      bodyStatements.push(scope);
    }
    
    
    return new IfStatement(booleanExpression, []);
  }

  shouldAnalyze(content: string): boolean {
    return /if\s?\(/.test(content);
  }
}
