function alwaysTrue() {
  return true;
}

function saySomethingAfter5Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola soy una promesa');
      resolve();
    }, 5000);
  });
}

function* ids() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

console.log(alwaysTrue());
saySomethingAfter5Seconds().then(() => {
  console.log('saySomethingAfter5Seconds resuelto');
});
console.log(alwaysTrue());
