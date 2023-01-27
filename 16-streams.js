// Four different types of streams in node 
// Writable - write data sequentially 
// Readable - read data sequentially
// Duplex - read and write data sequentially
// Transform - data can be modified when writing or reading

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt')

// By default the buffer size will be 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
    console.log(result);
})

stream.on('data', (error) => {
    console.log(error);
})
