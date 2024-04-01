// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

import { bankAccounts } from './data/data.js';

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  return array.filter(account => {
    const sumOfDeposits = account.deposits ? account.deposits.reduce((acc, deposit) => acc + deposit, 0) : 0;
    return sumOfDeposits < 2000;
  });
}

// Test
console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
