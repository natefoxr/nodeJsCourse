const http = require('http');

const server = http.createServer((req, res) => {
    console.log("User hit server.", req.url)
    res.end("Hello World");
});

server.listen(5000)