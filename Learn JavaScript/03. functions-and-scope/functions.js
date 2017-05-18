// 1º function: 
var calculatorOn = false;

function pressPowerButton() {
	if (calculatorOn) {
		console.log("Calctulator turnig off.");
		calculatorOn = false;
	}
	else {
		console.log("Calctulator turnig on.");
		calculatorOn = true;
	}
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

console.log("");

//2º function:
function takeOrder() {
  console.log("Order: pizza");
}

takeOrder();


console.log("");


// 3º function, including a parameter
function takeOrderWithTopping(topping) {
  console.log("Order: pizza topped with " + topping);
}

takeOrderWithTopping("four cheese");

console.log("");

// 4º function, including two parameters
function takeOrderWithTopping(topping, crustType) {
  console.log("Order: " + crustType + " pizza topped with " + topping);
}

takeOrder("four cheese", "thin crust");

console.log("");


// 5º function:
var orderCount = 0;

function myTakeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log("Order: " + crustType + " pizza topped with " + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

myTakeOrder("four cheese", "thin crust");
myTakeOrder("peperone", "tomate crust");
myTakeOrder("chicken", "white crust");

console.log(getSubTotal(orderCount));
console.log(getTotal());