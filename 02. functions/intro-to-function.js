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
};

foodDemand("Chinease food");

var orangeCost = function (price) {
    var totalcost = price * 5;
    console.log(totalcost);
};

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
};


if (quarter(48) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//Working with 2 parameters 

var calcPerimeter = function(a,b) {
  return (2*a) + (2*b);
}

console.log("The perimeter of a box with a width 5 and a heigth 10 is " + calcPerimeter(5,10));

// Learning the difference between Local and Global scope

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2; // Local Scope
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

// Function's review

var nameString = function (name) {
  return "Hi, I am" + " " + name;
};

console.log(nameString("Luciano Krebs"));

function sleepCheck(numHours) {
    if (numHours >= 8) {
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else {
        return "Get some more shut eye!";
    }
}

console.log(sleepCheck(10));
console.log(sleepCheck(8));
console.log(sleepCheck(5));