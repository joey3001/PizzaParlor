function Pizza (size) {
  this.size = size; 
  this.toppings = []; 
  this.cost = 0; 
}

Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
}

let newPizza = new Pizza ("large");

let array = ["mushrooms","onions","apples"];

newPizza.addToppings(array);

console.log(newPizza.toppings);



