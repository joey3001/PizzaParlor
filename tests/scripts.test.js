// Describe: Pizza()
// Test: Should correctly create an instance of Pizza
// Code: let newPizza = new Pizza()
// Code: let result = typeof(newPizza) 
// Expect: result.toEqual(object)

// Test: Should correctly create an instance of Pizza with input being provided to determine the size of the Pizza
// Code: let exampleSize = "Large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let result = newPizza.size
// Expect: result.toEqual("Large")

// Describe: toppingsArray
// Test: Should enter checked checkbox values into an array
// Code: let result = []
// Code: toppingsArray(result)
// Expect: result.toEqual([checked value 1, checked value 2, checked value 3...])

// Describe: addToppings(toppings)
// Test: Should correctly add toppings to an instance of Pizza
// Code: let exampleSize = "Large"
// Code: let exampleToppings = ["mushrooms","onions","cheese"]
// Code: let newPizza = new Pizza(exampleSize)
// Code: newPizza.addToppings(exampleToppings)
// Code: let result = newPizza.toppings
// Expect: result.toEqual(["mushrooms","onions","cheese"])

// Describe: costCalculator
// Test: Should return Pizza.cost
// Code: let exampleSize = "Small"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let baseCost = newPizza.cost;
// Code: newPizza.costCalculator()
// Code: let result = newPizza.cost
// Expect: result.toEqual(baseCost)

// Test: Should add 5 to Pizza.cost if Pizza.size = "Large"
// Code: let exampleSize = "Large"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let baseCost = newPizza.cost;
// Code: newPizza.costCalculator()
// Code: let result = newPizza.cost
// Expect: result.toEqual(baseCost + 5)

// Test: Should add 5 to Pizza.cost if Pizza.toppings.length > 1
// Code: let exampleSize = "Small"
// Code: let newPizza = new Pizza(exampleSize)
// Code: let exampleToppings = ["mushrooms","onions","cheese"]
// Code: newPizza.addToppings(exampleToppings)
// Code: let baseCost = newPizza.cost;
// Code: newPizza.costCalculator()
// Code: let result = newPizza.cost
// Expect: result.toEqual(baseCost + 5)

// Describe: fadeFunction
// Test: Should return a function that executes the fadeIn method on text associated with a specified selector & object.  
// Code: let result = fadeFunction(selector, pizzaObject);
/* Expect: result.toEqual( ƒ () {
    $(selector).text(pizzaObject.cost).fadeIn();
  })
*/

// Test: If the selector is an image, a function that executes the fadeIn method on the image should be returned.
// Code: let selector = "img"
// Code: let result = fadeFunction(selector, pizzaObject);
/* Expect: result.toEqual( ƒ () {
    $(selector).fadeIn();
  })
*/