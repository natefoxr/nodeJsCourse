const express = require('express');
const { identity } = require('lodash');
const app = express();
const { products } = require('./data')


app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    });
    res.json(newProducts);
})

app.get('/api/products/:productId', (req, res) => {
    const {productId} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send(`<h1>Product does not exist.</h1>\n<a href='/'>Home</a>`);
    }
    res.json(singleProduct);
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    const { productId, reviewId } = req.params;
    console.log(productId, reviewId);
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000....');
});