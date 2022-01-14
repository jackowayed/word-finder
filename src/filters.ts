export interface Filter {
  filterWords(input: string[]): string[];
};

export class IdentityFilter {
  filterWords(input: string[]): string[] {
    return input;
  }
}