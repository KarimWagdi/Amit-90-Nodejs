const fs = require('fs');

console.log("Hello, World!");
console.log("This is a test.");



fs.writeFile('./output.txt', 'Hello, MF World!', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
} )

const data = fs.readFileSync('./data.json', 'utf8');
// const data = fs.readFile('./data.json', 'utf8');
console.log(data);