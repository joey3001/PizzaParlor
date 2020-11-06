function Pizza (size) {
  this.size = size; 
  this.toppings = []; 
  this.cost = 5; 
}

Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
}

Pizza.prototype.costCalculator = function(){
  if (this.size === "Large") {
    this.cost += 5; 
  }
  if (this.toppings.length > 1) {
    this.cost += 5; 
  }
  return this.cost; 
}

function toppingsArray(toppings) {
  $("input:checkbox[name=toppings]:checked").each(function() {
  toppings.push($(this).val());
  });
};


$(document).ready(function() {
  $("#pizzaCost").submit(function(event) {
    event.preventDefault();
    let size = $("#size").val()
    let newPizza = new Pizza(size);
    let toppings = []
    toppingsArray(toppings);
    newPizza.addToppings(toppings);
  });
});