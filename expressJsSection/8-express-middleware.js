const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

// req => middleware => res

// Can be use to invoke a function or method on every route
// app.use(logger)
// or can be invoked on certain paths
// app.use('/api', logger)

// execute multiple middleware functions in app.use
// app.use([logger, authorize])

// Middleware options -- our own / express / third party
app.use([logger, morgan('tiny')]);

app.get('/', logger,(req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About');
})
app.get('/api/products', (req, res) => {
    res.send('Products');
})
app.get('/api/users', authorize, (req, res) => {
    console.log(req.query);
    res.send('Items');
})

app.listen(5000, () => {
    console.log('Server listening on port 5000....');
});