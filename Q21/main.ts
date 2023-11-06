//#Q21
// Define an array of city objects
const cities = [
    {
      name: "New York City",
      population: 8398748,
      country: "United States",
    },
    {
      name: "Paris",
      population: 2140526,
      country: "France",
    },
    {
      name: "Tokyo",
      population: 13929286,
      country: "Japan",
    },
    {
      name: "Sydney",
      population: 5312163,
      country: "Australia",
    },
    {
      name: "Rio de Janeiro",
      population: 6718903,
      country: "Brazil",
    },
  ];
  
  // Print information about each city
  console.log("Cities Information:");
  for (const city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Population: ${city.population}`);
    console.log(`Country: ${city.country}`);
    console.log();
  }
  
