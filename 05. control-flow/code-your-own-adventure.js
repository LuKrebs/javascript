// It's a simple game that ask questions for the user. The purpuse here is to work and practice with the
// core concepts of the JavaScript language

var user = prompt("Do you want to FIGHT, RUN or PAY?").toLowerCase();

switch(user) {
    case 'fight':
        var testFight = prompt("Are you strong? (YES or NO)").toLowerCase();
        var testFightTwo = prompt("Are you smart? (YES or NO)").toLowerCase();
        if (testFight === "yes" && testFightTwo === "yes") {
            console.log("I known it was easy for you.");
        }
        else {
            console.log("To win a fight like this, you must be smart AND strong. You lose.");
        }
        break;
    case 'run':
        var testRun = prompt("Do you run everyday?? (YES or NO)").toLowerCase();
        var testRunTwo = prompt("Do you eat salad everyday? (YES or NO)").toLowerCase();
        if (testRun === "yes" || testRunTwo === "yes") {
            console.log("I known it was easy for you.");
        }
        else {
            console.log("To win a run like this, you must or run everyday OR eat salad everyday. You lose.");
        }
        break;
    case 'pay':
        var testPay = prompt("Do you have a million dollars?? (YES or NO)").toLowerCase();
        if (testPay === "yes") {
            console.log("I known it was cheap for you.");
        }
        else {
            console.log("To pay a bill like this, you must, at least, have a million dollars. You lose.");
        }
        break;
    default:
        console.log("Do you choose some of the three optoions? Are you sure? Please, choose Run, Fight ou Pay");
    
}


