
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from './data/data.js';

export function getClientsWithBalanceOverOneHundred(array) {
  return array.filter(account => account.balance > 100);
}

// Test
console.log(getClientsWithBalanceOverOneHundred(bankAccounts)); // Output: [{ id: 1, name: 'Susan', balance: 100.32, deposits: [150, 30, 221], withdrawals: [110, 70.68, 120] }, { id: 2, name: 'Morgan', balance: 1100, deposits: [1100] }, { id: 3, name: 'Joshua', balance: 18456.57, deposits: [4000, 5000, 6000, 9200, 256.57], withdrawals: [1500, 1400, 1500, 1500] }]


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
