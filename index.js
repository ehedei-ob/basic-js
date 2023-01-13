function getFibonacci(limit = 5) {
  if (limit < 1) {
    throw Error('Operación no soportada');
  }

  if (limit === 1) {
    return [1];
  }

  const result = [1, 1];
  for (let i = 2; i < limit; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(getFibonacci(6));
