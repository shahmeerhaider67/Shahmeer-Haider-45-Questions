//#Q3
// Store the person's name in a variable
const personName: string = "JOHN WICK";

// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Convert the name to titlecase
const titleCaseName: string = personName
  .toLowerCase()
  .replace(/\b\w/g, (char) => char.toUpperCase());

// Print the name in titlecase
console.log("Titlecase: " + titleCaseName);










