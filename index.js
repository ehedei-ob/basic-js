const today = new Date();
const birthdate = new Date('1983-06-21');
let isTodayAfterBirthdate = today > birthdate;
let day = birthdate.getDate();
let month = birthdate.getMonth();
let year = birthdate.getFullYear();

console.log('today:', today);
console.log('birthdate:', birthdate);
console.log('isTodayAfterBirthdate', isTodayAfterBirthdate);
console.log('day:', day);
console.log('month:', month);
console.log('year:', year);
