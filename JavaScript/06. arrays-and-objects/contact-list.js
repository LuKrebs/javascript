// This is a simple program to work with the core concepts Objects in JavaScript.


// Starting an empty object
var friends = {};


//add a "friend" to my empty object
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(555) 555 - 5555",
    address: ["Apple Inc", "New York"]
};

//add another "friend" to my empty object
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(489) 489 - 489",
    address: ["Microsoft Inc", "San Francisco"]
};

// This is a function that list all of the keys in my object
function list(obj) {
  for(var key in obj) {
    console.log(key);
  }
}


// This is a function that take the key (the name of the friend) and 
// give all of his/her information (the values of the respective key)
function search(name) {
    for(var x in friends) {
        if (friends[x].firstName == name) {
            return friends[x];
        }
    }
}

console.log("Here are all of my contact list:");
list(friends);
console.log("");
console.log(search("Steve"));
console.log(search("Bill"));