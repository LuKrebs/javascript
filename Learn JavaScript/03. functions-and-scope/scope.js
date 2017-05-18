// Global variables
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

console.log("");
console.log("Landry: " + laundryRoom + ", Mail: " + mailRoom);

function myApartment() {
	// local variables ~> Functional Scope
	// This variables are not accessible inside of the function
	var myCoffeeMaker = 'Aeropress';
	var myCloset = 'Extra coats in the back';
	var myRefridgerator = 'Filled with veggies and dark chocolate.';
	var myDog = 'Nikko';
}