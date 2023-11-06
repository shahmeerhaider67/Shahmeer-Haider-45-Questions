//#Q6
// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t\n   John Doe   \n\t";

// Print the name with whitespace
console.log("Name with Whitespace: \"" + personNameWithWhitespace + "\"");

// Strip the whitespace from the name
const strippedName: string = personNameWithWhitespace.trim();

// Print the name after stripping whitespace
console.log("Stripped Name: \"" + strippedName + "\"");

