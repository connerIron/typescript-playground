import addNumbers, { addStrings, formatThings, fetchData, introduce } from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings('123', 'abc'));
console.log(formatThings('Hello World', 1));
console.log(formatThings('Hello World', 'Test'));
console.log(fetchData('https://ironhealth.io/get'));
console.log(introduce('Howdy', ...['Jack', 'John', 'Conner']));

// console.log(addNumbers(1, "jack")); 