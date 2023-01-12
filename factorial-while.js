const factorialWhile = (limit = 10) => {
  let result = 1;
  let index = 1;

  while (index <= limit) {
    result *= index;
    index++;
  }

  return result;
};

module.exports = { factorialWhile };
