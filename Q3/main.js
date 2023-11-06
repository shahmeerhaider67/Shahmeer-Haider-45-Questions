// Store the person's name in a variable
var personName = "JOHN WICK";
// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Convert the name to titlecase
var titleCaseName = personName
    .toLowerCase()
    .replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// Print the name in titlecase
console.log("Titlecase: " + titleCaseName);
