const express = require('express');
const path = require('path');

const app = express()

let fpath = './node-express-course/02-express-tutorial/navbar-app/'

// sets up the middleware
app.use(express.static('./expressJsSection/public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, `${fpath}/index.html`))
// })

app.get('*', (req, res) => {
    res.status(404).send('404, resource not found.')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})