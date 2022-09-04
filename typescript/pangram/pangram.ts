
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function isPangram(sentence :string) :boolean {
  return alphabet.split('').every((letter) => {
    return sentence.toLowerCase().includes(letter);
  }); 
}
