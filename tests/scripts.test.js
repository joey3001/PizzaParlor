// Describe: Pizza(size)
// Test: Should correctly create an instance of Pizza
// Code: let exampleSize = "large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let result = Pizza.size
// Expect: result.toEqual("large")

// Describe: addToppings(toppings)
// Test: Should correctly add toppings to an instance of Pizza
// Code: let exampleSize = "large"
// Code: let exampleToppings = ["mushrooms","onions","cheese"]
// Code: let newPizza = new Pizza(exampleSize)
// Code: newPizza.addToppings(exampleToppings)
// Code: let result = newPizza.toppings
// Expect: result.toEqual(["mushrooms","onions","cheese"])

// Describe: costCalculator
// Test: Should do nothing to the cost of the pizza
// Code: let exampleSize = "large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let baseCost = newPizza.cost;
// Code: newPizza.costCalculator()
// Code: let result = newPizza.cost
// Expect: result.toEqual(baseCost)