function calculateTripDetails(speed) {
    const distance = 1500; // Total distance of the trip in miles
    const fuelBudget = 175; // Budget for fuel in dollars
    const costPerGallon = 3; // Average cost of fuel per gallon in dollars
    let fuelEfficiency;
  
    // Set fuel efficiency based on the given speed
    switch (speed) {
      case 55:
        fuelEfficiency = 30;
        break;
      case 60:
        fuelEfficiency = 28;
        break;
      case 75:
        fuelEfficiency = 23;
        break;
      default:
        console.log("Invalid speed.");
        return;
    }
  
    // Calculate fuel needed for the entire trip
    const gallonsNeeded = distance / fuelEfficiency;
  
    // Calculate total cost of fuel
    const totalCost = gallonsNeeded * costPerGallon;
  
    // Calculate the time it will take for the trip in hours
    const timeInHours = distance / speed;
  
    // Check if the budget is enough
    const isBudgetEnough = totalCost <= fuelBudget;
  
    // Log the results
    console.log(`At ${speed} mph:`);
    console.log(`- Gallons of fuel needed: ${gallonsNeeded.toFixed(2)} gallons`);
    console.log(`- Total cost of fuel: $${totalCost.toFixed(2)}`);
    console.log(`- Time for the trip: ${timeInHours.toFixed(2)} hours`);
    console.log(`- Budget is enough: ${isBudgetEnough ? "Yes" : "No"}`);
    console.log("\n");
  }
  
  // Test the program for different speeds
  calculateTripDetails(55);
  calculateTripDetails(60);
  calculateTripDetails(75);
  