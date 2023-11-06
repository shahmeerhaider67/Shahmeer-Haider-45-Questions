//#Q39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with three city-country pairs and print the returned values
  let location1 = cityCountry("Lahore", "Pakistan");
  let location2 = cityCountry("New York", "USA");
  let location3 = cityCountry("Paris", "France");
  
  console.log(location1);
  console.log(location2);
  console.log(location3);
  
