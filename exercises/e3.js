
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  if (array.length === 0) {
    return 0; // Return 0 for empty arrays
  }

  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
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
