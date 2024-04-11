// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from './data/data.js';

export function getClientsWithLetterInName(array, letter) {
  const clientsWithLetterInName = [];
  for (let i = 0; i < array.length; i++) {
    const name = array[i].name.toLowerCase();
    if (name.includes(letter.toLowerCase())) {
      clientsWithLetterInName.push(array[i].name);
    }
  }
  return clientsWithLetterInName;
}

// Test
console.log(getClientsWithLetterInName(bankAccounts, 'e')); // Output: ['Susan', 'Morgan', 'Candy', 'Steven', 'Phel']


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
