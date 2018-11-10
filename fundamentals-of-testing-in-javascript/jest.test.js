const { sumAsync, substractAsync } = require('./math');

test('sum adds numbers', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('substract substracts numbers', async () => {
  const result = await substractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
