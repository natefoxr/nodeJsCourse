// Modules

// Code can be split into different files or modules
// There are node_modules that have many modules to use

// Modules are encapsulated code (only share minimum)
const {john, nate} = require('./4-names') 
const {sayHi} = require('./5-utils') 


sayHi('Susan');
sayHi(john);
sayHi(nate());
