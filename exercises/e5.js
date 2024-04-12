
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

import { bankAccounts } from './data/data.js';

export function getAllClientNames(array) {
  const clientNames = [];
  for (let i = 0; i < array.length; i++) {
    clientNames.push(array[i].name);
  }
  return clientNames;
}

// Test
console.log(getAllClientNames(bankAccounts)); // Output: ['Susan', 'Morgan', 'Joshua', 'Candy', 'Phil']

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
