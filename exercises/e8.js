
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from './data/data.js';

export function getClientWithGreatestBalance(array) {
  if (array.length === 0) {
    return [];
  }

  let accountsWithGreatestBalance = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i].balance > accountsWithGreatestBalance[0].balance) {
      accountsWithGreatestBalance = [array[i]];
    } else if (array[i].balance === accountsWithGreatestBalance[0].balance) {
      accountsWithGreatestBalance.push(array[i]);
    }
  }

  return accountsWithGreatestBalance;
}


// Test
console.log(getClientWithGreatestBalance(bankAccounts)); // Output: [{ id: 3, name: 'Joshua', balance: 18456.57, deposits: [4000, 5000, 6000, 9200, 256.57], withdrawals: [1500, 1400, 1500, 1500] }]



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
