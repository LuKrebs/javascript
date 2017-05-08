// The code above ask for the user to choose some of them:
var userChoice = prompt("Do you chose rock, paper or scissors?");

//Generating a random number
var computerChoice = Math.random();

// Defining a value for a range of number

if (computerChoice < 0.34) {
	computerChoice = "rock";
}
else if (<= 0.67) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}

// Printing out the computer's number
console.log("Computer: " + computerChoice);


//Writting a function to compare the numbers

function compare(choice1, choice2) {
	if (choice1 == choice2) {
		return "The result is a tie!";
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			return "rock wins";
		}
        else {
            return "paper wins";
        }
	}
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";    
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";    
        }
        else {
            return "scissors wins";
        }
    }
}

compare(userChoice, computerChoice);

// Some improves to figure out


/* What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that? */

/* What if players in the game could also choose Rope in this game? */

/* In this version, if both players make the same choice, the game returns a tie. 
What if the game didn't end there but instead asked both players for new choices? */