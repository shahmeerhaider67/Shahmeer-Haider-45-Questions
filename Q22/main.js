// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Attempt to access an out-of-bounds index to produce an error
var outOfBoundsIndex = 10;
try {
    var value = numbers[outOfBoundsIndex];
    console.log("Value at index ".concat(outOfBoundsIndex, ": ").concat(value));
}
catch (error) {
    console.error("An error occurred:", error);
}
// Correct the index and print a value
var validIndex = 2;
var correctedValue = numbers[validIndex];
console.log("Corrected value at index ".concat(validIndex, ": ").concat(correctedValue));
