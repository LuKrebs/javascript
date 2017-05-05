// Check if the user is ready to play!
confirm("Are you ready to play?");

var age = prompt("What's your age");

if (age < 13) {
    console.log("Ok... you can play, but I'm not responsible for nothing, ok? sorry...");    
}
else {
    console.log("You are old enough to take risk. It's time to play!");    
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");   
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");    
}

var feedback = prompt("Can you, please, give me your feedback about the game? A grade for 0 to 10?");

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
}