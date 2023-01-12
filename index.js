const age = Number(prompt('¿Cual es tu edad?'));
const message = isNaN(age)
  ? 'Ha insertado una edad incorrecta'
  : 'Su edad es: ' + age;
console.log(message);
