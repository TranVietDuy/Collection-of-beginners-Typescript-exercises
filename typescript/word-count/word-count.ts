export function count(words: string): Map<string, number> {
  return words
    .toLowerCase()
    .trim()
    .split(/\s+/g)
    .reduce((acc, word) => acc.set(word, (acc.get(word) || 0) + 1), new Map())
    }
