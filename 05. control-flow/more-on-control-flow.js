// Quick refresh
// Veryfing if the number is divisable by 2 or not
var isEven = function (number) {
	if (number % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

// Quick refresh 2
var citiesIWillWork = ["San Francisco", "New York", "São Paulo"];

for (var i = 0; i < citiesIWillWork.length; i++) {
    console.log("I'll work as Developer in " + citiesIWillWork[i]);
}


function learningSwitch() {
//Learning 'switch' statment
	var lunch = prompt("What do you want for lunch?", "Type your choice here"); 
	//p.s: The 'prompt' command doesn't work on the command line

	switch(lunch) {
		case 'sandwich':
			console.log("Sure thing! One sandwich, coming up.");
			confirm("Sure thing! One sandwich, coming up.");
			break;
	  	case 'soup':
		    console.log("Got it! Tomato's my favorite.");
		    confirm("Got it! Tomato's my favorite.");
		    break;
	  	case 'salad':
	    	console.log("Sounds good! How about a caesar salad?");
	    	confirm("Sounds good! How about a caesar salad?");
	    	break;
	  	case 'pie':
	    	console.log("Pie's not a meal!");
	    	confirm("Pie's not a meal!");
	    	break;
		default:
			console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
			confirm("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
	}
}


//Learning 'switch' statment 2

function learningSwitch2() {
	var color = prompt("What's your favorite primary color?","Type your favorite color here");
	switch(color) {
		case 'red':
			console.log("Red's a good color!");
			confirm("Red's a good color!");
			break;
		case 'blue':
			console.log("That's my favorite color, too!");
			confirm("That's my favorite color, too!");
			break;
		case 'yellow':
			console.log("Really good! A beatiful color!");
			confirm("Really good! A beatiful color!");
			break;
		default:
			console.log("I don't think that's a primary color!");
			confirm("I don't think that's a primary color!");
	}
}		

function learningSwitch3() {
	// Learning 'switch' statment 3
	var answer = prompt("Add your question here!");
	switch(answer) {
	  case 'What is your name?':
	    console.log("My name is Luciano. Nice to meet you!");
	    confirm("My name is Luciano. Nice to meet you!");
	    break;
	  // Add your code here!
	  case 'How old are you?':
	    console.log("I'm 23 years-old");
	    confirm("I'm 23 years-old");
	    break;
	  default:
	    console.log("Sorry... I don't know how to answer this question :/");
	    confirm("Sorry... I don't know how to answer this question :/");
	}
}

// Starting learning and(&&), or(||), and not(!)

// Working with &&
var hungry = true;
var foodHere = true;

var eat = function() {
	if (hungry && foodHere) {
		return true;
	}
	else {
		return false;
	}
};

// Working with ||
var tired = true;
var bored = false;

var nap = function() {
	if (tired || bored) {
		return true;
	}
	else {
		return false;
	}
};

// Working with not !
var programming = false;

var happy = function() {
	if (!programming) {
		return true;
	}
	else {
		return false;
	}
}
