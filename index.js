let compra = ['Tomate', 'Huevos', 'Pan', 'Arroz', 'Lechuga'];
console.log('Lista original: ', compra);
compra.push('Aceite de girasol');
console.log('Lista tras añadir aceite:', compra);
compra.pop();
console.log('Lista tras eliminar aceite:', compra);

let pelis = [
  {
    titulo: 'Matrix',
    director: 'Hermanas Wachowski',
    fecha: new Date('1999-10-02')
  },
  {
    titulo: 'Star Wars: Una Nueva Esperanza',
    director: 'George Lucas',
    fecha: new Date('1977-05-04')
  },
  {
    titulo: 'Interstellar',
    director: 'Christopher Nolan',
    fecha: new Date('2014-08-23')
  }
];

console.log('Peliculas favoritas:', pelis);

const fechaLimite = new Date('2010-01-01');
let pelisModernas = pelis.filter((peli) => peli.fecha > fechaLimite);

console.log('Peliculas posteriores a 2010:', pelisModernas);

let directores = pelis.map((peli) => peli.director);
console.log('Directores de las peliculas:', directores);

let titulos = pelis.map((peli) => peli.titulo);
console.log('Titulos:', titulos);

let directoresPeliculas = directores.concat(titulos);
console.log('Directores y peliculas:', directoresPeliculas);

let directoresPeliculasSpread = [...directores, ...titulos];
console.log('Directores y peliculas (spread):', directoresPeliculasSpread);
