export function isKeyword(word: string) {
  return /(var|const|let|while|for|if|function)/.test(word);
}
