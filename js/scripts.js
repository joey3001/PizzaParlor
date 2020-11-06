function Pizza (size) {
  this.size = size; 
  this.toppings = []; 
  this.cost = 0; 
}

Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
}

Pizza.prototype.costCalculator = function(){
  return this.cost; 
}

let newPizza = new Pizza ("large");

let array = ["mushrooms","onions","apples"];

newPizza.addToppings(array);

let baseCost = newPizza.costCalculator(); 
alert(baseCost);
alert(newPizza.cost);





