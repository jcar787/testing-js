const { sum, substract } = require('./math');

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
};

const test = (title, callback) => {
  try {
    callback();
    console.log(`√ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.log(error);
  }
};

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('substract substracts numbers', () => {
  const result = substract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
