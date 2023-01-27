// const { readFile, writeFile } = require('fs');
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const getText =  (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {{
//                 resolve(data);
//             }}
//         });
//     });
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`)
//         console.log(first, second)
//     } catch (error) {
//         console.log(error);
//     }
// }

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME.promises: ${first}, ${second}`, { flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error);
    }
}

start();
