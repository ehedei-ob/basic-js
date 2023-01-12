const yo = {
  nombre: 'Ehedei',
  apellido: 'Hernandez',
  edad: 39,
  altura: 173,
  eresDesarrollador: true
};

console.log('Yo:', yo);

const { edad } = yo;
console.log('Mi edad', edad);

const amigos = [
  yo,
  {
    nombre: 'Matias',
    apellido: 'Fernandez',
    edad: 43,
    altura: 180,
    eresDesarrollador: true
  },
  {
    nombre: 'Marcos',
    apellido: 'Suárez',
    edad: 42,
    altura: 179,
    eresDesarrollador: false
  }
];

console.log('Amigos', amigos);

const amigosOrdenados = [...amigos].sort((a, b) => b.edad - a.edad);
console.log('Amigos ordenados', amigosOrdenados);
