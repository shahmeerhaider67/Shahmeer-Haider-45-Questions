//#Q37
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: "${message}"`);
  }
  
  // Make a large shirt with the default message
  makeShirt();
  
  // Make a medium shirt with the default message
  makeShirt("Medium");
  
  // Make a custom-sized shirt with a different message
  makeShirt("Small", "TypeScript is awesome!");
