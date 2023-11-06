function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Loop through the options and add them to the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required and optional information
var myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022 });
console.log(myCar);
