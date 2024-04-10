// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return undefined; // or handle this case as appropriate for your use case
  }

  let min = array[0]; // Initialize min with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]; // Update min if the current element is smaller
    }
  }

  return min;
}

export function findMaxValueInArray(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return undefined; // or handle this case as appropriate for your use case
  }

  let max = array[0]; // Initialize max with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]; // Update max if the current element is larger
    }
  }

  return max;
}


// Test
console.log(findMinValueInArray([2, 45, 32, 3, 0, 46, 12])); // Output: 0
console.log(findMaxValueInArray([2, 45, 32, 3, 0, 46, 12])); // Output: 46

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
