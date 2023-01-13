const { logger } = require('./logger');

function throwError() {
  throw new Error('Este es un error de test');
}

try {
  throwError();
} catch (error) {
  logger.error(error.message);
}
