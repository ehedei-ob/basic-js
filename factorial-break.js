const factorialBreak = (limit = 10) => {
  let result = 1;
  let index = 1;

  while (true) {
    result *= index;
    index++;

    if (index > limit) {
      break;
    }
  }

  return result;
};

module.exports = { factorialBreak };
