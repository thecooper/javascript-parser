import { Statement } from "../statements/Statement";

const asciiLowerValue = 97;
const asciiUpperValue = 122;

export class MinifiedSymbolGenerator {
  private static charIndex = asciiLowerValue - 1;

  public static generateMinifiedSymbol(): string {
    if (this.charIndex === asciiUpperValue) {
      this.charIndex = asciiLowerValue;
    }

    if (this.charIndex < 122) {
      return String.fromCharCode(++this.charIndex);
    }
  }
}
