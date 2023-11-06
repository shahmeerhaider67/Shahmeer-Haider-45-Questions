//#Q38
function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describeCity("Karachi", "Pakistan");
  describeCity("Paris", "France");
  describeCity("New York"); // Uses the default country "Unknown"
  
