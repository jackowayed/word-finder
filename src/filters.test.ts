//import 'filters';
import { AllowedLettersFilter, IdentityFilter } from './filters';

test('IdentityFilter returns its input', () => {
  const words = ["abc", "xyz"];
  const filter = new IdentityFilter();
  expect(filter.filterWords(words)).toEqual(words);
});


test('AllowedLetters accepts words only using the letters', () => {
  const words = ["allowed", "disallowed"];
  const filter = new AllowedLettersFilter("alowed");
  expect(filter.filterWords(words)).toEqual(["allowed"]);
})