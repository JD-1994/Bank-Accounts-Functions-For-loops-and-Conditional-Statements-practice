
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  // Iterate through the array and add each number to the sum
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  // Calculate the average by dividing the sum by the number of elements
  const average = sum / array.length;

  return average;
}

// Test
console.log(getAverage([22, 45, 4, 65])); // Output: 34


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!isNaN(parseInt(char))) {
      sum += parseInt(char);
    }
  }
  return sum;
}

// Test
console.log(getStringSum("GH2U87A")); // Output: 17
console.log(getStringSum("GHIUJUHSG")); // Output: 0



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
