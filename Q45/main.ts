//#Q45
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary keyword arguments
  }
  
  function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    // Loop through the options and add them to the car object
    for (const option of options) {
      for (const key in option) {
        car[key] = option[key];
      }
    }
  
    return car;
  }
  
  // Call the function with required and optional information
  const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022 });
  
  console.log(myCar);
  
