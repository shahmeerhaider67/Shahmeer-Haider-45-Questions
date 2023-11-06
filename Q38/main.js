function describeCity(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("Paris", "France");
describeCity("New York"); // Uses the default country "Unknown"
