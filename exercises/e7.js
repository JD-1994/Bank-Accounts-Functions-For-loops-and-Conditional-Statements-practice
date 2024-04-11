// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from './data/data.js';

export function getClientWithLeastPositiveBalance(array) {
  let accountsWithLeastPositiveBalance = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      if (accountsWithLeastPositiveBalance.length === 0 || array[i].balance < accountsWithLeastPositiveBalance[0].balance) {
        accountsWithLeastPositiveBalance = [array[i]];
      } else if (array[i].balance === accountsWithLeastPositiveBalance[0].balance) {
        accountsWithLeastPositiveBalance.push(array[i]);
      }
    }
  }

  return accountsWithLeastPositiveBalance;
}

// Test
console.log(getClientWithLeastPositiveBalance(bankAccounts)); // Output: [{ id: 5, name: 'Phil', balance: 18, deposits: [100, 18], withdrawals: [100] }]


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function