//#Q22
// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Attempt to access an out-of-bounds index to produce an error
const outOfBoundsIndex = 10;

try {
  const value = numbers[outOfBoundsIndex];
  console.log(`Value at index ${outOfBoundsIndex}: ${value}`);
} catch (error) {
  console.error("An error occurred:", error);
}

// Correct the index and print a value
const validIndex = 2;

const correctedValue = numbers[validIndex];
console.log(`Corrected value at index ${validIndex}: ${correctedValue}`);
