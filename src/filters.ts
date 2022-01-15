const _ = require("lodash");

export abstract class Filter {
  filterWords(input: string[]): string[] {
    return input.filter((word: string) => this.filterWord(word));
  }

  abstract filterWord(word: string): boolean;
};

export class IdentityFilter extends Filter {
  filterWord(word: string): boolean {
    return true;
  }
}

export class AllowedLettersFilter extends Filter {
  letters: string;

  constructor(letters = "abcdefghijklmnopqrstuvwxyz") {
    super();
    this.letters = letters;
  }

  filterWord(word: string): boolean {
    return _.every(word, (c: string) => {
      return this.letters.includes(c);
    });
  }
}