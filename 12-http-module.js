const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('This is a web server using node.js and the http module')
    }
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>404</title>
    </head>
    <body>
    <h1>404 Error!</h1>
    <h2>We can't seem to find the page you are looking for</h2>
    <a href="/">Return Home<a>
    </body>
    </html>
    `)
})

server.listen(5000);
