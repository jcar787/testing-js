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

let result = sum(3, 7);
let expected = 10;
expect(result).toBe(expected);

result = substract(7, 3);
expected = 4;
expect(result).toBe(expected);
