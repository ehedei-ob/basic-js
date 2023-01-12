const name = 'Ehedei';
const age = 39;
const isDev = true;
const birthdate = new Date('1983-06-21');
const favouriteBook = {
  title: 'Dune',
  author: 'Frank Herbert',
  release: new Date('1968-08-12'),
  url: new URL('https://en.wikipedia.org/wiki/Dune_(novel)')
};

const list = [name, age, isDev, birthdate, favouriteBook];

console.log(list);
