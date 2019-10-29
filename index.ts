import * as fs from "fs";
import { DocumentIterator } from "./CodeIterator";
import { StatementParser } from "./StatementParser";
import { Minifier } from "./Minifier";
import { CodeGenerator } from "./CodeGenerator";

const documentIterator = new DocumentIterator("./index.js");
const parser = new StatementParser(documentIterator);
// const minifier = new Minifier(parser);

try {
  const statements = parser.parse();
  const output = statements.map(x => x.toString()).join("\n");
  
  fs.writeFileSync("index.new.js", output);
  
  console.log("End of document reached");
  console.log("Statements: ", statements);
  
} catch (error) {
  console.error("There was an error trying to parse the js file: ", error)
}

