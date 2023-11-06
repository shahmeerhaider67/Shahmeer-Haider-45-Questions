//#Q18
// Define the array of places to visit
const placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "London",
    "Switzerland",
    "Turkey"
  ];
  
  // Print the original order
  console.log("Original Order:");
  console.log(placesToVisit);
  
  // Print in alphabetical order without modifying the original
  console.log("\nAlphabetical Order (without modifying the original):");
  console.log([...placesToVisit].sort());
  
  // Check that the original order is still intact
  console.log("\nOriginal Order (after alphabetical sorting check):");
  console.log(placesToVisit);
  
  // Print in reverse alphabetical order without modifying the original
  console.log("\nReverse Alphabetical Order (without modifying the original):");
  console.log([...placesToVisit].sort().reverse());
  
  // Check that the original order is still intact
  console.log("\nOriginal Order (after reverse alphabetical sorting check):");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("\nReversed Order:");
  console.log(placesToVisit);
  
  // Reverse the order again to restore the original order
  placesToVisit.reverse();
  console.log("\nRestored Original Order:");
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  console.log("\nAlphabetical Order (after sorting):");
  console.log(placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("\nReverse Alphabetical Order (after sorting):");
  console.log(placesToVisit);
  
