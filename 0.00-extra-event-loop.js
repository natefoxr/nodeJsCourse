const { readFile } = require('fs');

console.log('TASK: Starting the first task.');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(`Result: ${result}`);
    console.log('TASK: Completed the first task.')
})
console.log('TASK: Starting the next task.')
