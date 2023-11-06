function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: \"").concat(message, "\""));
}
// Make a large shirt with the default message
makeShirt();
// Make a medium shirt with the default message
makeShirt("Medium");
// Make a custom-sized shirt with a different message
makeShirt("Small", "TypeScript is awesome!");
