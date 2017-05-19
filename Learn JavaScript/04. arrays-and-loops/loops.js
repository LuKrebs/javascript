// Starting work with loops
var vacationSpots = ["San Francisco", "New York", "Toronoto"];


// A loop starting with the first item in the array
for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

console.log("");

// A loop starting with the last item in the array
for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

console.log("");


// A simple program that checks if 
// an array have a commom item with another array
var myPlaces = ["San Francisco", "New York", "Toronto"];

var friendPlaces = ["Europe", "England", "San Francisco"];

console.log("Here's the places I would like to live:");
for (var i = 0; i < myPlaces.length; i++) {
	console.log(myPlaces[i]);
}

console.log("");

console.log("Here's the places my wife would like to live:");
for (var i = 0; i < friendPlaces.length; i++) {
	console.log(friendPlaces[i]);
}

console.log("");

console.log("Here's tehe places we have in commom:");
for (var i = 0; i < myPlaces.length; i++) {
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
      console.log(myPlaces[i]);
    }
  }
}


console.log("");

// Starting with while
// the program will run until it find a Spade
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  
  var randomNumber = Math.floor(Math.random() * 4);
  
  currentCard = cards[randomNumber];
}

console.log("The program found a Spade!");