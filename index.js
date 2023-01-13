import { suma, multiplica } from './controllers/controllers.js';
import chalk from 'chalk';

let op1 = 1;
let op2 = 2;
console.log(`Suma ${op1} y ${op2}:`, suma(op1, op2));
console.log(`Multiplicación ${op1} y ${op2}:`, multiplica(op1, op2));

op1 = 4;
op2 = 5;
console.log(`Suma ${op1} y ${op2}:`, suma(op1, op2));
console.log(
  chalk.green(`Multiplicación ${op1} y ${op2}:`, multiplica(op1, op2))
);
