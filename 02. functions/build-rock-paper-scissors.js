function compare() {    
    // The code above ask for the user to choose some of them:
    var userChoice = prompt("Do you chose rock, paper or scissors?");

    //Generating a random number between 0 and 1 
    var computerChoice = Math.random();

    // Defining a value for a range of number

    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    }
    else if (computerChoice <= 0.67) {
    	computerChoice = "paper";
    }
    else {
    	computerChoice = "scissors";
    }

    // Printing out the computer's number
    confirm("Computer: " + computerChoice);


    //Writting a function to compare the choices


	if (userChoice == computerChoice) {
		confirm("The result is a tie!");
	}
	else if (userChoice === "rock") {
		if (computerChoice === "scissors") {
			confirm("rock wins");
		}
        else {
            confirm("paper wins");
        }
	}
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            confirm("paper wins");
        }
        else {
            confirm("scissors wins");
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            confirm("rock wins");
        }
        else {
            confirm("scissors wins");
        }
    }
}


// Some improves to figure out


/* What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that? */

/* What if players in the game could also choose Rope in this game? */

/* In this version, if both players make the same choice, the game confirm("a tie!") 
What if the game didn't end there but instead asked both players for new choices? */