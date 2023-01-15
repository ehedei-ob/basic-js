const firstName = 'Ehedei';
const lastName = 'Hernandez';

const person = { firstName, lastName };

const personInJson = JSON.stringify(person);

localStorage.setItem('person', personInJson);
sessionStorage.setItem('person', personInJson);

const date = new Date();
date.setMinutes(date.getMinutes() + 2);

document.cookie = `data=${personInJson}; expires=${date}`;
