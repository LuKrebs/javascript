// FizzBuzz Challange:
// We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". 
// And if the number is divisible by 5 we're going to print "Buzz".
// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!
for (var a = 1; a < 21; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        var b = a;
        b = "FizzBuzz";
        console.log(b);
    }
    else if (a % 3 === 0 && a % 5 !== 0) {
        var b = a;
        b = "Fizz";
        console.log(b);
    }
    else if (a % 5 === 0 && a % 3 !== 0) {
        var b = a;
        b = "Buzz";
        console.log(b);
    }
    else {
        console.log(a);
    }
}

var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2": 
            return "Great story. Mean prospector.";
        case "Finding Nemo": 
            return  "Cool animation, and funny turtles.";
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
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
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


// Adding a method  