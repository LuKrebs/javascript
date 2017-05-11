// Starting learn how to use a for loop


// This block of code will print out the numbers 1 to 10

console.log("");
console.log("Printing 1 until 10");

for (var i = 1; i < 11; i++) {
	console.log(i);
}

console.log("");
console.log("Printint 5 until 10");

// This block of code will print out the numbers 5 to 10
for (var a = 5; a < 11; a++) {
	console.log(a);
}

console.log("");
console.log("Printing 4 until 23");

// This block of code will print out the numbers 4 to 24
for (var b = 4; b < 24; b++) {
	console.log(b);
}

console.log("");
console.log("Printint only fifith numbers until 50");

// Writting a block of code that only print every fifith number until 50
for (var c = 0; c < 50; c += 5) {
	console.log(c);
}

console.log("");
console.log("Printing 8 until 120 by count increments of 12");

for (var b = 8; b < 120; b += 12) {
	console.log(b);
}

console.log("");
console.log("Printing starts in 10 and go until 0");

for (var i = 10; i >= 0; i--) {
	console.log(i);
}

console.log("");
console.log("Printint starts in 100 unitl 0 by 5, but I don't include 0");

for (var i = 100; i > 0; i -= 5) {
	console.log(i);
}

console.log("");
console.log("Starting learn Arrays");

var myArray = ["Banana peel", "Avogado peel", 5, 10];

console.log(myArray);

// Arrays have a 0-bases idexing.

// myArray[3] ~> It have the 10 value, the last one

console.log("")
console.log("Using loops and arrays together");

var cities = ["Melbourne", "San Francisco", "São Paulo", "NYC", "Vancouver", "England"];

for (var i = 0; i < cities.length; i++) {
	console.log("I would like to visit " + cities[i]);
}


console.log("");
console.log("Writting my own array and for loop");

names = ["Lu", "Mari", "Leo", "Tia sonia e tio Divas", "Sogro, sogra e Conradão"];
for (var i = 0; i < names.length; i++) {
	console.log("I know someone called " + names[i]);
}


console.log("");
console.log("Writting a for loop that starts in 0 and go until 25 (including 25) by 5");

for (var i = 0; i <=25; i += 5) {
	console.log(i);
}