const app = require('express')();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/', (req, res) => {
    console.log('User hit the server on url\t', req.url)
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    console.log('User hit the server on url\t', req.url)
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>404, resourse not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})