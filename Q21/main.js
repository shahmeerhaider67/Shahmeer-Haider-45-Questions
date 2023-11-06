// Define an array of city objects
var cities = [
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
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log("City: ".concat(city.name));
    console.log("Population: ".concat(city.population));
    console.log("Country: ".concat(city.country));
    console.log();
}
