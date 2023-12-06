// Part 1: Math Problems

// Initialize variables with four numbers
let n1 = 10;
let n2 = 15;
let n3 = 20;
let n4 = 5;

// Log initial numbers
console.log(`Initial numbers: ${n1}, ${n2}, ${n3}, ${n4}`);

// Check if all numbers are divisible by 5
let allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all numbers divisible by 5? ${allDivisibleBy5}`);

// Check if the first number is larger than the last
let firstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${firstLargerThanLast}`);

// Perform the arithmetic chain
let result = ((n2 - n1) * n3) % n4;
console.log(`Result of the arithmetic chain: ${result}`);

// Change the way isOver25 calculates
let isOver25 = n1 + n2 + n3 + n4 > 25; // Assuming isOver25 was a check for the sum being over 25
console.log(`Is the sum of the numbers over 25? ${isOver25}`);
