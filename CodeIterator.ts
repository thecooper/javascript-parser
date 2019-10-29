import * as fs from "fs";

export interface ICodeIterator {
  next(skipCount: number): string;
  next():string;
  peek(): string;
  readonly isFinished: boolean;
  readonly all: string;
  getWordsUntilSemiColon(): string[];
}

export class DocumentIterator implements ICodeIterator {
  private index = -1;
  private content: string;

  constructor(filePath: string) {
    const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });

    this.content = replaceAllValues(fileContents, "\n", " ")
      .trim();
  }

  peek(): string {
    return this.content[this.index + 1];
  }

  next(skipCount: number = 1): string {
    if (this.isFinished) {
      return null;
    }

    this.index += skipCount;
    
    return this.content[this.index];
  }

  get all(): string {
    return this.content.substr(this.index);
  }

  get isFinished(): boolean {
    return this.index + 1 > this.content.length;
  }

  getWordsUntilSemiColon(): string[] {
    const parts: string[] = [];

    while (!this.isFinished) {
      const word = this.next();

      parts.push(word);

      if (word === ";") {
        break;
      }
    }

    return parts;
  }
}

function replaceAllValues(
  haystack: string,
  needle: string,
  replacement: string
): string {
  let newHaystack = haystack;

  while (newHaystack.indexOf(needle) !== -1) {
    newHaystack = newHaystack.replace(needle, replacement);
  }

  return newHaystack;
}
