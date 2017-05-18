// FizzBuzz Challange:
// We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". 
// And if the number is divisible by 5 we're going to print "Buzz".
// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!
console.log("");
console.log("The FizzBuzz game staring in 1 up to 20");
for (var a = 1; a < 21; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");    
    }
    else if (a % 3 === 0 && a % 5 !== 0) {
        console.log("Fizz");    
    }
    else if (a % 3 !== 0 && a % 5 === 0) {
        console.log("Buzz");    
    }
    else {
        console.log(a);    
    }
}

console.log("");
// Quick review of 'switch' statement
var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
        case "The Lion King":
            return "Great songs.";
        default:
            return "I don't know!";
    }
};

// Quick review of objects...
var bob = {};

var Spencer = {
  age: 22,
  country: "United States"
};

// make your own object here called me
var me = {
    age: 23,
    country: "Canada"
};

// making information inside of an object accessible by a global variable
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information using dot notation
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information ~> p.s: using dot notation
var name2 = susan.name;
var age2 = susan.age;


// Using bracket notation to access a proprerty
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];

// Quick review on functions
var multiply = function(a,b) {
    return a * b;   
};

var square = function (x) {
  return x * x;
};

// Quick review of constructor object
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Quick review of literal object notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Creating another object equal susan1, but using constructor object
var susan2 = new Object();
susan2.name = susan1.name;
susan2.age = susan1.age;

console.log("");
console.log("Logs bob object");
console.log(bob);
console.log("");
console.log("Logs susan1 object");
console.log(susan1);
console.log("");
console.log("Logs susan2 object");
console.log(susan2);
console.log("");
console.log("Logs the dog object");
console.log(dog);
console.log("");
console.log("Logs Spencer object");
console.log(Spencer);
console.log("");
console.log("Logs 'me' object");
console.log(me);

// Quick revire of creating object in 2 different ways
var snoopy = {
    species: "beagle",
    age: 10
};

var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;

var bicycle = {
    speed: 0,
    gear: 1,
    frame_material: "carbon fiber"
};

console.log("");
console.log("Logs snoopy object");
console.log(snoopy);
console.log("");
console.log("Logs buddy object");
console.log(buddy);
console.log("");
console.log("Logs bicycle object");
console.log(bicycle);

// Quick review on fucntions
var squareTwo = function(x) {
  return x * x;
};

var multiplyTwo = function(x) {
  return x * x;
};

// Set up a method inside of an object
var lucianoKrebs = new Object();
lucianoKrebs.name = "Luciano Krebs";
lucianoKrebs.position = "Junior Web Developer";

lucianoKrebs.setPosition = function(newPosition) {
  lucianoKrebs.position = newPosition;
};

lucianoKrebs.setPosition("Software Engineer");
console.log("");
console.log("Logs lucianoKrebs object:");
console.log(lucianoKrebs.name + " now is working as " + lucianoKrebs.position);

var ann = new Object();
ann.name = "Ann";
ann.age = "63";
ann.setAge = function (age) {
  ann.age = age;
}
// changing the age of 'ann' object
ann.setAge("62");
console.log("");
console.log("Logs the 'ann' object");
console.log("Name: " + ann.name + ". Age: " + ann.age);

// finding the yaer of birth as a method inside an object
var personTest = new Object();
personTest.name = "Test";
personTest.age = "17";
personTest.yearOfBirth = function() {
  personTest.myYearOfBirth = 2017 - personTest.age;
}

personTest.yearOfBirth();

console.log("");
console.log(personTest);

// Starting to learn the keyword 'this'
var changingAge = function (newAge) {
  this.age = newAge;
};
// Creating a new object
var personTestTwo = new Object();

// Setting an age 
personTestTwo.age = 30;

// Creating a new label and setting up it to be equal a function that will change the person's age
personTestTwo.setAge = changingAge;

// changing the age of the personTestTwo
personTestTwo.setAge(45);
console.log("");
console.log("Logs the personTestTwo object")
console.log(personTestTwo);

var personTestThree = new Object();
personTestThree.age = 13;
personTestThree.setAge = changingAge;
personTestThree.setAge(20);
console.log("");
console.log("Logs the personTestThree object")
console.log(personTestThree);

// 1º Create an object called rectangle
// 2º Write two functions:
// One of this fucntions should change the height of the rectangle
// The other should change the width of the rectangle
// After that, set up the heigth of the rectangle to 6 and the width to 8

var rectangle = new Object();
rectangle.heigth = 1;
rectangle.width = 1;

var setHeigth = function (newHeigth) {
  this.heigth = newHeigth;
};
var setWidth = function (newWidth) {
  this.width = newWidth;
};

rectangle.setHeigth = setHeigth;
rectangle.setWidth = setWidth;

rectangle.setHeigth(6);
rectangle.setWidth(8);

console.log("");
console.log("The heigth of the rectangle now is " + rectangle.heigth);
console.log("The width of the rectangle now is " + rectangle.width);

/* 
  1º Creat an object called mySquare
  2º Write two functions. One of this fucntions should calculate the perimeter
  and the other function should calculate the area of the square 
*/
var mySquare = new Object();
mySquare.sideLength = 5;

var calcPerimeter = function() {
  this.perimeter = this.sideLength * 4;
  return this.sideLength * 4;
};
var calcArea = function() {
  this.area = this.sideLength * this.sideLength;
  return this.sideLength * this.sideLength;
};

mySquare.calcPerimeter = calcPerimeter;
mySquare.calcArea = calcArea;

mySquare.calcPerimeter();
mySquare.calcArea();

console.log("");
console.log("This is the perimeter of mySquare " + mySquare.perimeter);
console.log("This is the area of mySquare " + mySquare.area);


// Custom Constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var george = new Person("George Washington", 275);
var bill = new Person("Bill Gates", 30);

console.log("");
console.log(george);
console.log(bill);

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

function Dog(name, age, color) {
  this.name = name;
  this.age = age; 
  this.color = color;
}

var spike = new Dog("Spike", 1, "black");
var godo = new Cat("Godofredo", 4, "white");

console.log("");
console.log(spike);
console.log(godo);


function HomoSapiensPerson(name, age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new HomoSapiensPerson("Sally Bowles", 39);
var holden = new HomoSapiensPerson("Holden Caulfield", 16);

console.log("");
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


function MyRectangle(h, w) {
  this.h = h;
  this.w = w;
  this.calcArea = function() {
    return this.w * this.h;
  };
  this.calcPerimeter = function() {
    return this.w * 2 + this.h * 2;
  };
}

var rex = new MyRectangle(5, 4);
var myArea = rex.calcArea();
var myPer = rex.calcPerimeter();

console.log("");
console.log("The side of my rectangles are " + rex.h + " and " + rex.w + ".");
console.log("The area of my rectangle is " + myArea);
console.log("The area of my rectangle is " + myPer);


function Rabbit(adjective) {
  this.adjective = adjective;
  this.describeMyself = function () {
    return ("I am a " + this.adjective + " rabbit");
  };
}

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log("");
console.log(rabbit1.describeMyself());
console.log(rabbit2.describeMyself());
console.log(rabbit3.describeMyself());


function ArrayPerson(name, age) {
  this.name = name;
  this.age = age;
}

// Creating a new array using literal constructor
var family = new Array();
family[0] = new ArrayPerson("alice", 40);
family[1] = new ArrayPerson("bob", 42);
family[2] = new ArrayPerson("michelle", 8);
family[3] = new ArrayPerson("timmy", 6);

console.log("");
console.log(family);

// Starting to use loops and objects together
console.log("");
for (var i =  0; i < family.length; i++) {
  console.log(family[i].name);
}

// Passing objects into functions
function TestPerson(name, age) {
  this.name = name;
  this.age = age;
}
var anotherBob = new TestPerson("bob", 20);
var anotherAlice = new TestPerson("alice", 18);

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

var olderAge = function(person1, person2) {
  if (person1.age >= person2.age) {
    return person1.age;
  }
  else {
    return person2.age;
  }
};

console.log("");
console.log("The age's difference between bob and alice is " + ageDifference(anotherBob, anotherAlice));
console.log("The older person is  " + olderAge(anotherBob, anotherAlice));


// Quick refresh... 
var someGuy = {
  age: 23,
  country: "Canada",
};

var someGuyWithConstructor = new Object();
someGuyWithConstructor.age = 23;
someGuyWithConstructor.country = "Canada";

console.log("");
console.log("Using literal notation");
console.log(someGuy);
console.log("Using object constructor");
console.log(someGuyWithConstructor);


var garfield = new Object();
garfield.species = "cat";
garfield.age = 16;

var age = garfield["age"];
var spieceOfGarfield = garfield.species;

console.log("");
console.log("The age of the garfield is " + age);
console.log("The species of garfield is " + spieceOfGarfield);

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

function Book(pages, author) {
  this.pages = pages;
  this.author = author;
}

var the_hobbit = new Book(320, "J.R.R. Tolkien");
console.log("");
console.log(the_hobbit);

// Quick review ~> methods
function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.perimeter = function() {
    return Math.PI * 2 * this.radius;
  };
}

var testingCircle = new Circle(8);
var testingCircleArea = testingCircle.area(); 
var testingCirclePerimeter = testingCircle.perimeter(); 

console.log("");
console.log("This is the area of the testingCircle: " + Math.floor(testingCircleArea));
console.log("This is the perimeter of the testingCircle: " + Math.floor(testingCirclePerimeter));