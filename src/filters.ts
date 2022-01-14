export abstract class Filter {
  filterWords(input: string[]): string[] {
    return input.filter(this.filterWord);
  }

  abstract filterWord(word: string): boolean;
};

export class IdentityFilter extends Filter {
  filterWord(word: string): boolean {
    return true;
  }
}