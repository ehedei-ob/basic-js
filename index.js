let firstName = 'Ehedei';
let name = 'Hernández';
let student = `${firstName} ${name}`;
let upperStudent = student.toUpperCase();
let lowerStudent = student.toLowerCase();
let lengthStudent = student.length;
let firstNameFirstChar = firstName[0];
let nameLastChar = name.slice(-1);
let studentWithoutSpaces = student.replace(/ /g, '');
let isNamePresent = student.includes(firstName);

console.log('firstName =', firstName);
console.log('name =', name);
console.log('student =', student);
console.log('upperStudent =', upperStudent);
console.log('lowerStudent =', lowerStudent);
console.log('lengthStudent =', lengthStudent);
console.log('firstNameFirstChar =', firstNameFirstChar);
console.log('nameLastChar =', nameLastChar);
console.log('studentWithoutSpaces =', studentWithoutSpaces);
console.log('isNamePresent =', isNamePresent);
