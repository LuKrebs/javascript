/*  Starting Learn JavaScritp*/

/* My name's length */
console.log("What is the Lenght of 'Luciano' name?");
console.log("Luciano Krebs".length);

/*  Doing some maths*/
console.log("3 + 4 is equal to...?");
console.log(3+4);
console.log("100 / 5 is equal to...?");
console.log(100/5);

/*  
It's a multiple line comment :)
*/

// It's a simple line comment :)

// confirm and prompt are uset to make pop-up boxes! 

// confirm('This is an example of using JS!'); ~> This code works similary with 'alert' in CSS
// confirm('Are you sure you wanna go?');

// prompt("Where do you come from?"); 


"I'm coding like a champ"

"I'm coding like a champ".length

"I'm coding like a champ".length > 10 // It will return true or false


// Learning booleans
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);
console.log(8*5 !== 16);


// Learning conditionals
if ("Luciano" !== 10) {
    console.log("Luciano é !== '10'");
}

if (10 !== 10) {
	console.log("It don't will appear!")
}
else {
	console.log("It'll appear!!")
}


if (20 !== 20) {
    console.log("This is a true condition!");
}
else {
    console.log("The condition is false");
}

if ("Jon".length * 2 / (2+1) === 2) {
    console.log("The answer makes sense!");
} 
else {
    console.log("Error Error Error");
}

// Working with modulo: the reminder of some division

console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

// Working with modulo and conditional statments 

if(10 % 5 === 0) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// Learning substrings
"wonderful day".substring(3,7);

// x.substring(starting here, stop here and don't include);

console.log("January".substring(0,3)); // ~> 'Jan'
console.log("Melbourne is great".substring(0,12)); // ~> 'Melbourne is'
console.log("Hamburgers".substring(3,"Hambuerguers".length-1)); // ~> 'burguers'

// Learning variables
var myAge = 23;

console.log(myAge);

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "Brazil";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));

// Changing variable values:

// On line 2, declare a variable myName and give it your name.
var myName = "Luciano";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);

if (10 !== 10) {
    console.log("If the conditional is true, I'll appear");   
}
else {
    console.log("I finished my first course!");   
}

