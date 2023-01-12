let altura = 173;
let alturaEnMetros = 1.73;
let pesoEnKilos = 75.3;
let alturaAlAlza = Math.ceil(alturaEnMetros);
let alturaALaBaja = Math.floor(alturaEnMetros);
let pesoALaBaja = Math.floor(pesoEnKilos);
let esIgual = Number.MAX_VALUE === Number.MAX_VALUE + 1;

console.log('altura =', altura);
console.log('alturaEnMetros =', alturaEnMetros);
console.log('pesoEnKilos =', pesoEnKilos);
console.log('alturaAlAlza =', alturaAlAlza);
console.log('alturaALaBaja =', alturaALaBaja);
console.log('pesoALaBaja =', pesoALaBaja);
console.log(
  '¿El máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript?',
  esIgual
);
