// Describe: Pizza(size)
// Test: Should correctly create an instance of Pizza
// Code: let exampleSize = "large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let result = Pizza.size
// Expect: result.toEqual("large")

// Test: Should correctly create an instance of Pizza with a cost value of 5
// Code: let exampleSize = "large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let result = Pizza.cost
// Expect: result.toEqual(5)

// Describe: addToppings(toppings)
// Test: Should correctly add toppings to an instance of Pizza
// Code: let exampleSize = "large"
// Code: let exampleToppings = ["mushrooms","onions","cheese"]
// Code: let newPizza = new Pizza(exampleSize)
// Code: newPizza.addToppings(exampleToppings)
// Code: let result = newPizza.toppings
// Expect: result.toEqual(["mushrooms","onions","cheese"])

// Describe: costCalculator
// Test: Should add 5$ to the cost of the pizza if the pizza size if "large"
// Code: let exampleSize = "large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let baseCost = newPizza.cost;
// Code: newPizza.costCalculator()
// Code: let result = newPizza.cost
// Expect: result.toEqual(baseCost + 5)