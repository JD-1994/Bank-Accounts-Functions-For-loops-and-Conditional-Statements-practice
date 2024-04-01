
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from './data/data.js';

export function getAllDepositsGreaterThanOneHundred(array) {
  return array.flatMap(account => {
    if (account.deposits) {
      return account.deposits.filter(deposit => deposit > 100);
    } else {
      return [];
    }
  });
}

// Test
console.log(getAllDepositsGreaterThanOneHundred(bankAccounts)); // Output: [150, 221, 1100, 4000, 5000, 6000, 9200]



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
