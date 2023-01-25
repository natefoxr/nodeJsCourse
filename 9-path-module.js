const path = require('path');

// Return platform specific seperator
console.log(path.sep);

// Join returns normalized paths together with the seperator for the specific platform
const filePath = path.join('/content', 'subfolder/', '/test.txt');
console.log(filePath);

// Returns the final destination of the path
const base = path.basename(filePath);
console.log(base);

// Returns an absolute path from head
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
