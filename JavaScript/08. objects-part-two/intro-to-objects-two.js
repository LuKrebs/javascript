// Quick review ~> creating an object using literal notation

var james = {
	job: "programmer",
	married: false
};

function Person(job, married) {
	this.job = job;
	this.married = married;
}
// create another object using constructor notation
var gabby = new Person("student", false); 

console.log("");
console.log("Logs the objects");
console.log(james);
console.log(gabby);

function PersonTwo(job, married) {
	this.job = job;
	this.married = married;

	this.speak = function() {
		console.log("Hello!");
	};
}

var user = new PersonTwo('CodeCademy Student', false);
console.log("");
console.log("Printing the method associated with the function PersonTwo");
user.speak();


var luciano = {
	job: "developer",
	city: "san francisco",

	test: function(x) {
		console.log("Hello, I am feeling " + x);
	}
};
console.log("");
console.log("Printing the method associated with the 'luciano' object");
luciano.test("great!!")


var lucianoKrebs = {
	job: "Developer",
	city: "San Francisco",
	sayJob: function() {
		console.log("Hi, I work as a " + this.job + " in " + this.city);
	}
};

console.log('');
// Printing the lucianoKrebs job using the function
lucianoKrebs.sayJob();
// changing the lucianoKrebs job
lucianoKrebs.job = "Software Engineer";
// Printing the changed's lucianoKrebs job
lucianoKrebs.sayJob();


// the keyword 'typeof'

var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log('');
console.log("Discovering the type of variables using 'typeof':")
console.log( typeof anObj);
console.log( typeof aNumber);
console.log( typeof aString);

// the method 'hasOwnProperty'

var myObj = {
	name: "JavaScript"
};

console.log('');
console.log(myObj.hasOwnProperty('name')); // ~> Should return true
console.log(myObj.hasOwnProperty('nickname')); // ~> Should return true

// using the power of hasOwnProperty
console.log('');

var suitcase = {
	shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
	console.log(suitcase.shorts);
}
else {
	suitcase.shorts = "The blue ones";
	console.log(suitcase.shorts);
}

console.log('');

// Quick review of how to printing out all the keys and all the values in some object
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
//printing just the keys
for (var x in nyc) {
	console.log(x);
}

console.log('');

//printing just the values
for (var x in nyc) {
	console.log(nyc[x]);
}

// Getting start with OOP
function oopPerson(name, age) {
	this.name = name;
	this.age = age;
}

var bobTwo = new oopPerson("Bob Smith", 30);
var susanTwo = new oopPerson("Susan Jordan", 35);


console.log('');


// Creating a Circle function
function Circle(radius) {
	this.radius = radius;
}

function Dog(breed) {
	this.breed = breed;
}

var buddy = new Dog("Golden");
buddy.bark = function() {
	console.log("Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");
snoopy.bark = function() {
	console.log("Woof Woof");
};
snoopy.bark();

// Starting with the 'prototype' method 
function HomoSapiens(name) {
	this.name = name;
}
// Creating two instances of the class HomoSapiens
var jhon = new HomoSapiens("Jhon");
var ann = new HomoSapiens("Ann");

// Adding three new properties to the HomoSapiens Class
HomoSapiens.prototype.species = "HomoSapiens";
HomoSapiens.prototype.tellMySpecies = function() {
	console.log("My current species is " + this.species);
};
HomoSapiens.prototype.greet = function() {
	console.log("Hi! I am " + this.name);
};

console.log("");
jhon.greet();
jhon.tellMySpecies();

ann.greet();
ann.tellMySpecies();

console.log("");

// Practice makes perfect... 
function Cat(name, breed) {
	this.name = name;
	this.breed = breed;
}

var cat1 = new Cat('Godo', 'breed1');
var cat2 = new Cat('Garfield', 'breed2');

Cat.prototype.meow = function() {
	console.log("Meow!");
};
Cat.prototype.greet = function() {
	console.log("Hi! I am a cat and my name is " + this.name);
};

cat1.greet();
cat1.meow();
cat2.greet();
cat2.meow();


console.log("");


function Animals(name, numLegs) {
	this.name = name;
	this.numLegs = numLegs;
}

Animals.prototype.sayName = function() {
	console.log("Hi my name is " + this.name);
};

var penguin = new Animals("Penguin", 2);
penguin.sayName();


console.log("");


// Creating a Penguin class
function Penguin(name, numLegs) {
	this.name = name;
	this.numLegs = numLegs;
}
Penguin.prototype.sayName = function() {
	console.log("Hi my name is " + this.name);	
}

// Testning the Penguin class
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();


console.log("");


// Learning inheritance
// Creating a new class called Vehicles
function Vehicles(name, numWheels) {
	this.name = name;
	this.numWheels = numWheels;
}
// Prototyping a new method called greetingOthersCars to the Vehicles' class 
Vehicles.prototype.greetingOthersCars = function() {
	console.log("Hi! I am a " + this.name + " and I have " + this.numWheels + " wheels.");
};
// Starting a new instance of Vehicles' class
var car = new Vehicles("Car", 4);
car.greetingOthersCars();
// Create a new class, called MotorCycle
function MotorCycle(name) {
	this.name = name;
	this.numWheels = 2;
}
// Inherits its to the Vehicles class
MotorCycle.prototype = new Vehicles();
var cg = new MotorCycle("cgzinha");
cg.greetingOthersCars();


console.log("");


function Patinete(name) {
	this.name = name;
}
Patinete.prototype = new MotorCycle();
var patineteTest = new Patinete("Patinete Test");
console.log("The number of wheels a patinete have, inherits from MotorCycle class: " + patineteTest.numWheels);

// Starting to learn public and private variables

function PersonPrivate(first,last,age) {
	// public variable. I'm able to access it outside of the scope of the function
	this.firstName = first; 
	this.lastName = last; 
	this.age = age; 
	// private variable. I'm unable to acces it outside of the scope of the function
	var bankBalance = 8000; // 

	this.getBalance = function() {
		return bankBalance;
	};
}

var testPerson = new PersonPrivate("test firstname", "test lastname", 25);
// console.log(testPerson.bankBalance); ~>it returns: undefined

// In this way, I'm to access a private variable
var myBalance = testPerson.getBalance();
console.log(myBalance);

// Creating another object
function PersonPersonPrivate(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	var bankBalance = 8000; // private variable

	// allowing access to a private variable if the parameter (password) is correct
	this.askTeller = function(password) { 
		if (password === 1234) {
			return bankBalance;
		}
		else {
			return "Wrong password.";
		}
	};
}

var jhonTwo = new PersonPersonPrivate("Joao", "Smith", 30);
var myBalanceTwo = jhonTwo.askTeller(1234);
console.log("");
console.log(myBalanceTwo);


console.log("");


// Quick review of typeof
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"	
};

for (var x in languages) {
	if (typeof languages[x] === "string") {
		console.log(languages[x]);
	}
}

// Quick review of prototype
function NewDog(breed) {
	this.breed = breed;
}

NewDog.prototype.sayHello = function() {
	console.log("Hello this is a " + this.breed + " dog");
};

console.log("");

var yourDog = new NewDog("golden retriever");
yourDog.sayHello();
var myNewDog = new NewDog("beagle");
myNewDog.sayHello();


console.log("");


// function with all grades public 
function StudentReport() {
	this.grade1 = 4;
	this.grade2 = 2;
	this.grade3 = 3;

	this.getGPA = function() {
		return (this.grade1 +  this.grade2 + this.grade3) / 3;
	};
}
var myStudentReport = new StudentReport();

console.log("Printing all of the student's grades");
// a for loop that are able to access all of the student's grades
for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


console.log("");

// function with all grades private
function NewStudentReport() {
	var grade1 = 3;
	var grade2 = 2;
	var grade3 = 4;

	this.getNewGPA = function() {
		return (grade1 + grade2 + grade3) / 3;
	};
}
var myNewStudentReport = new NewStudentReport();

console.log("Printing all of the student's grades");
// a for loop that are unable to access all of the student's grades
for(var x in myNewStudentReport) {
    if(typeof myNewStudentReport[x] !== "function") {
        console.log("Muahaha! " + myNewStudentReport[x]);
    }
}
console.log("Your overall GPA is " + myNewStudentReport.getNewGPA());