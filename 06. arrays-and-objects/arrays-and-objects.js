// Quick review about arrays

var list = ["San Francisco", "New York", "São Pualo"];

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log("Picking the third element in the array");
console.log(languages[2]);
console.log("");
console.log("Logs the length of the array")
console.log(languages.length);
console.log("");

console.log("Printing all of the elements in an array, one by one");
for (var i = 0; i < languages.length; i++) {
	console.log(languages[i]);
}

console.log("");
console.log("An array with different data types:");
var myArray = [42, true, "San Francisco"];
console.log(myArray);

console.log("");
console.log("It's also possible to have a multidimensional Array");
var newArray = [[1,2,3], [1,2,3], [1,2,3]];
console.log(newArray);

// Starting learn about objects

var phonebookEntry = {};

phonebookEntry.name = "Luciano Krebs";
phonebookEntry.number = "(555) 555 - 5555";
phonebookEntry.phone = function() {
	console.log("Calling " + this.name + ' at ' + this.number + "...")
}

console.log("");
phonebookEntry.phone();


console.log("");
// another example of object
var me = {
	name: "Luciano Krebs",
	age: 23
}
console.log("Logs the object created with the literal notation")
console.log(me);


console.log("");
// Using the object constructor to create an object
var myFriend = new Object();
myFriend["name"] = "San Francisco";
myFriend.position = "Web Developer";

console.log("Logs the object created with the object constructor")
console.log(myFriend);


console.log("");
// Creating more objects just to practice

// using literal notation
var object1 = {
    name: "Luciano Krebs",
    age: 23
}

var object2 = {
    city1: "San Francisco",
    position: "Web Developer"
}

var object3 = {
    city2: "New York",
    position: "Web Developer"
}


// using object constructor

var object4 = new Object();
object4["city3"] = "São Paulo";
object4["position"] = "Web Developer";

var object5 = new Object();
object5.city4 = "Singapore";
object5.position = "Web Developer";


console.log("Logs all the objects")
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);

// Learning heterogeneous arrays
var heterogeneousArray = [5, true, "Luciano", {city: "San Francisco", position: "Web Developer"}];

console.log("");
console.log("Log the heterogeneous array:");
console.log(heterogeneousArray);

// Getting a deep understando of jagged arrays: It's an array of arrays, but each array nested
// ins't have the same length. Example:
var myJaggedArray = [
	["Luciano Krebs",2,3],
	[1,2,3,4,{city: "San Francisco", position: "Web Developer"}]
];

console.log("");
console.log("Log the jagged array:");
console.log(myJaggedArray);


// Putting an Array inside of an Object
var myObject = {
	name: "Luciano",
	type: "Calm",
	interests: ["3D printing", "Data Science", "Robotics"]
}

// Creating my own object
var myOwnObject = {
    name: "Luciano Krebs",
    position: "Web Developer",
    city: "San Francisco",
    interests: {"3D printing": 10, "Data Science and Data Meaning": 10}
}