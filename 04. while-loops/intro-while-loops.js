// Heads and Tails...

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0) {
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}

console.log("");
console.log("Tails! Done flipping.");
console.log("");

// Starting learn while loops
var understand = true;

while (understand) {
	console.log("I'm learning while loops!!");
	understand = false;
}

console.log("");

var bool = true;

while (bool) {
	console.log("Less is more!");
	bool = false;
}

console.log("");

// Write a function that that logs "I'm looping" three times

var loop = function () {
	var i = 0;
	while (i < 3) {
		console.log("I'm looping!");
		i += 1;
	}
}

loop();

console.log("");

// Write a function that log only one time "Looped once!"
var myFunction = function() {	
	myBool = true;
	while (myBool) {
		console.log("Looped once!");
		myBool = false;
	}
}

myFunction();
console.log("");
console.log("Printing 1 to 10, inclunding 10 using for loop");

//Logs 1 to 10, inclunding 10 - using for lop
for (var a = 0; a < 11; a++) {
 console.log(a);
}

console.log("");
console.log("Printing 10 to 100, inclunding 100, by 10, using while loop and a counter variable");

//Logs 10 to 100, by 10, including 100 - using while
var b = 10;
while (b < 100) {
 console.log(b);
 b += 10;
}

//Learning the 'do'/'while' loop
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition);
} while(loopCondition);

console.log("");

// Practing with 'do/'while' loop

var logOnce = function () {
	var bool = true;
	do {
		console.log("I'll work as a web developer in another country!");
		bool = false;
	} while (bool);
}

logOnce();
console.log("");

// Printing all the letters of my name using for:
var myName = "Luciano Krebs";
for (var i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

console.log("");

//Logs all cities I'll work as a developer using while
var citiesIWillWork = ["San Francisco", "New York", "São Paulo"];
var a = 0;
while (a < citiesIWillWork.length) {
    console.log("I'll work as a developer in " + citiesIWillWork[a]);
    a += 1;
}

console.log("");

//Logs all cities I'll work as a developer using 'do'/'while' loop
var b = 0;
do {
    console.log("I'll work as a developer in " + citiesIWillWork[b]);
    b += 1;
} while (b < citiesIWillWork.length)


