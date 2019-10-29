import * as fs from "fs";
import { AssignmentStatement } from "./analyzers/AssignmentStatement";
import { Statement } from "./analyzers/Statement";

const EOL = "\n";

export class CodeGenerator {
  private outputFilename: string;

  constructor(outputFilename: string) {
    this.outputFilename = outputFilename;
  }

  generate(statements: Statement[]): void {
    let output: string = "";

    for (const statement of statements) {
      const generatedLine = statement.toString() + EOL;

      output += generatedLine;
    }

    fs.writeFileSync(this.outputFilename, output);
  }
}
