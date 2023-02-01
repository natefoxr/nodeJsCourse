const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./expressJsSection/00-index.html')
const aboutPage = readFileSync('./expressJsSection/00-about.html')
const errorPage = readFileSync('./expressJsSection/00-error.html')

const server = http.createServer((req, res) => {
    urls = {
        '/': 'home',
        '/about': 'about',
        '/home': 'home'
    }
    console.log("User hit server.", req.url)
    if (!urls[req.url]) {
        res.writeHead(404, {content: 'text/html'})
        res.write(errorPage)
        res.end()
    } else {
        if (req.url === '/') {
            res.writeHead(200, {content: 'text/plain'})
            res.write(homePage)
            res.end();
        }
        if (req.url === '/home') {
            res.writeHead(302, {location: '/'})
            res.end();
        }
        if (req.url === '/about') {
            res.writeHead(200, {content: 'text/html'})
            res.write(aboutPage)
            res.end();
        }
    }

});

server.listen(5000)