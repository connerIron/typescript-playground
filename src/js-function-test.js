const { getName } = require('./functions');

console.log(getName( {
    first: 'Conner',
    last: 'Aiken'
}))

// Typescript only does type checking upon compilation
console.log(getName());