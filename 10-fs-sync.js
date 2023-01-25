const { readFileSync, writeFileSync } = require('fs');

// Read two files 
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first);
// console.log(second);

// Write a file
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' });
console.log('finish');


// Read new file
// console.log(readFileSync('./content/result-sync.txt', 'utf8'));

console.log('next');
