//#Q44
function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please add some ingredients.");
    } else {
      console.log("You ordered a sandwich with the following items:");
      for (const item of items) {
        console.log(`- ${item}`);
      }
    }
  }
  
  // Call the function with different numbers of arguments
  orderSandwich("Ham", "Cheese", "Lettuce");
  orderSandwich("Turkey", "Bacon");
  orderSandwich(); // Empty sandwich
