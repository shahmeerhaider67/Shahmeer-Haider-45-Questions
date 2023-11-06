//#Q24
// Tests for equality and inequality with strings
console.log("Is 'apple' equal to 'apple'? I predict True.");
console.log('apple' === 'apple'); // True

console.log("Is 'apple' not equal to 'banana'? I predict True.");
console.log('apple' !== 'banana'); // True

console.log("Is 'apple' equal to 'Apple'? I predict False.");
console.log('apple' === 'Apple'); // False

console.log("Is 'apple' equal to 'APPLE'? I predict False.");
console.log('apple' === 'APPLE'); // False

// Tests using the lowercase function
const text = "Hello";

console.log("Is text in lowercase equal to 'hello'? I predict True.");
console.log(text.toLowerCase() === 'hello'); // True

console.log("Is text in lowercase equal to 'HELLO'? I predict False.");
console.log(text.toLowerCase() === 'HELLO'); // False

// Numerical tests
const num1 = 10;
const num2 = 5;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2); // False

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2); // True

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True

console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2); // False

console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2); // True

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const isTrue = true;
const isFalse = false;

console.log("Is isTrue and isFalse? I predict False.");
console.log(isTrue && isFalse); // False

console.log("Is isTrue or isFalse? I predict True.");
console.log(isTrue || isFalse); // True

// Test whether an item is in an array
const fruits = ["apple", "banana", "orange", "grape"];

console.log("Is 'apple' in the array? I predict True.");
console.log(fruits.includes('apple')); // True

console.log("Is 'watermelon' in the array? I predict False.");
console.log(fruits.includes('watermelon')); // False

// Test whether an item is not in an array
console.log("Is 'banana' not in the array? I predict False.");
console.log(!fruits.includes('banana')); // False

console.log("Is 'kiwi' not in the array? I predict True.");
console.log(!fruits.includes('kiwi')); // True
