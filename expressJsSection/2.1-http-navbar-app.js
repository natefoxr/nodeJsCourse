const http = require('http');
const {readFileSync} = require('fs');

let fpath = './expressJsSection/node-express-course/02-express-tutorial/navbar-app/'

// get all files
const homePage = readFileSync(`${fpath}index.html`)
const homeLogic = readFileSync(`${fpath}browser-app.js`)
const homeStyles = readFileSync(`${fpath}styles.css`)
const homeLogo = readFileSync(`${fpath}logo.svg`)

const server = http.createServer((req, res) => {
    url = req.url;
    urls = {
        '/': 'home',
        '/about': 'about',
        '/home': 'home'
    }
    console.log("User hit server.", req.url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/home') {
        res.writeHead(302, {location: '/'});
        res.end();
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});

        res.write(homeLogic);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }

});

server.listen(5000)