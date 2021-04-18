import { all } from '../src/all';

test('return true if all values are trusy', () => {
  expect(all([true, 1, "true"])).toBeTruthy();
});

test('return false if any values is falsy', () => {
  expect(all([true, 1, false])).toBeFalsy();
});
