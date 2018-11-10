const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
};

const test = async (title, callback) => {
  try {
    await callback();
    console.log(`√ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.log(error);
  }
};

global.test = test;
global.expect = expect;
