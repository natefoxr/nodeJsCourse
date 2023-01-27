const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Welcome to our home page')
    }
    if (req.url === '/about') {
        // BLOCKING CODE !!!
        // This will block all users from acessing that page
        for (let i = 0; i  < 1000; i++) {
            for (let j = 0; j  < 1000; j++) {
                console.log(`${j}, ${i}`)
            }
        }
        res.end('This is a web server using node.js and the http module')
    }
    res.end(`
    <h1>404 Error!</h1>
    <h2>We can't seem to find the page you are looking for</h2>
    <a href="/">Return Home<a>
    `)
})

server.listen(5000, () => {
    console.log('Server listening on port 5000....')
});
