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
  if (this.toppings.length > 1) {
    this.cost += 5; 
  }
  return this.cost; 
}
alert("h3");
$(document).ready(function() {
  $("#pizzaCost").submit(function(event) {
    alert("h1");
    event.preventDefault();
    alert("h1");
  });
});