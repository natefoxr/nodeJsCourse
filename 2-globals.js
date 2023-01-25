// GLOBALS - NO WINDOW

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// moudule    - info about current module (file)
// process    - info about env where the program is being executed
//                  - This will show where its located such as digitalocean etc.

console.log(__dirname);
console.log(__filename);
let i = 0;

let helloWorldInterval = setInterval(() => {
        if (i === 3) {
            clearInterval(helloWorldInterval)
        } else {
            console.log('Hello world!');
            i++;
        }
}, 1000);

setTimeout(() => {
    console.log('Hello Nate!');
}, 5000);

