const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request event');
    res.end('Hello World');
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
})

// event loop is waiting for the resquests and will keep the server alive
