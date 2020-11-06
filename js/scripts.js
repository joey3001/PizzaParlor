function Pizza (size) {
  this.size = size; 
  this.toppings = []; 
  this.cost = 5; 
}

Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
}

Pizza.prototype.costCalculator = function(){
  if (this.size === "large") {
    this.cost += 5; 
  }
  return this.cost; 
}

let newPizza = new Pizza("large");

let array = ["mushrooms","onions","apples"];

newPizza.addToppings(array);

let newCost = newPizza.costCalculator();
alert(newCost);







