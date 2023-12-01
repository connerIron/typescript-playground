const { getName, getNameSafe } = require('./functions');

console.log(getName( {
    first: 'Conner',
    last: 'Aiken'
}))

// But we can check
console.log(getNameSafe());

// Typescript only does type checking upon compilation
console.log(getName());
 