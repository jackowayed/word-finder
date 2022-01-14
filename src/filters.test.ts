//import 'filters';
import { IdentityFilter } from './filters';

test('IdentityFilter returns its input', () => {
  const words = ["abc", "xyz"];
  const filter = new IdentityFilter();
  expect(filter.filterWords(words)).toEqual(words);
});

