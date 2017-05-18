// It's a simple rock, paper and scissors game building with the purpose 
// to work with the core concepts of JavaScript 

function getUserChoice() {
  var userInput = prompt("Rock, Paper or Scissors?");
  userInput = userInput.toLowerCase();
  if (userInput === "rock" ||userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
  }
  else {
    console.log("Error Error Error :/");
  }
}

function getComputerChoice() {
  var number = Math.floor(Math.random() * 3);
  switch(number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  else if (userChoice === 'bomb') {
    return "User wins";
  }
  else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer wins";
      }
      else {
        return "User wins";
      }
    }
    else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "User wins";
      }
      else {
        return "Computer wins";
      }
    }
    else {
      if (computerChoice === "rock") {
          return "Computer wins";
      }
      else {
          return "User wins";
      }
    }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  console.log("User choice: " + userChoice);
  console.log("Computer choice: " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();







