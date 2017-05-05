// Learning functions

var greeting = function (name) {
	console.log("Great to see you, " +  name);
}

greeting("Luciano Krebs");

var divideByThree = function (number) {
	var val = number / 3;
	console.log(val);
}

divideByThree(100000);

var foodDemand = function (food) {
    console.log("I want to eat " + food);
}

foodDemand("Chinease food");

var orangeCost = function (price) {
    var totalcost = price * 5;
    console.log(totalcost);
}

orangeCost(5);

var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(1000000);
console.log(newNumber);

// Define quarter here.
var quarter = function (number) {
    return number / 4;
}


if (quarter(48) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
