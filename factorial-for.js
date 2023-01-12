const factorialFor = (limit = 10) => {
  let result = 1;
  for (let i = 1; i <= limit; i++) {
    result *= i;
  }

  return result;
};

module.exports = { factorialFor };
