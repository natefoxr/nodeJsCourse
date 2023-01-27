const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// must first listen for the event then emit the event

customEmitter.on('response', (name, id) => {
    console.log(`Data received:\n\tuser: ${name}\n\tid: ${id}\n`);
});
customEmitter.on('response', () => {
    console.log(`Some other logic `);
});

customEmitter.emit('response', 'john', 34);