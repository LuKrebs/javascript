// It's a simple game that ask questions for the user. The purpuse here is to work and practice with the
// core concepts of the JavaScript language

function fightOrRunOrPay() {
    var user = prompt("Do you want to FIGHT, RUN or PAY?").toLowerCase();

    switch(user) {
        case 'fight':
            var testFight = prompt("Are you strong? (YES or NO)").toLowerCase();
            var testFightTwo = prompt("Are you smart? (YES or NO)").toLowerCase();
            if (testFight === "yes" && testFightTwo === "yes") {
                console.log("I known it was easy for you.");
                confirm("I known it was easy for you.");
            }
            else {
                console.log("To win a fight like this, you must be smart AND strong. You lose.");
                confirm("To win a fight like this, you must be smart AND strong. You lose.");
            }
            break;
        case 'run':
            var testRun = prompt("Do you run everyday?? (YES or NO)").toLowerCase();
            var testRunTwo = prompt("Do you eat salad everyday? (YES or NO)").toLowerCase();
            if (testRun === "yes" || testRunTwo === "yes") {
                console.log("I known it was easy for you.");
                confirm("I known it was easy for you.");
            }
            else {
                console.log("To win a run like this, you must or run everyday OR eat salad everyday. You lose.");
                confirm("To win a run like this, you must or run everyday OR eat salad everyday. You lose.");
            }
            break;
        case 'pay':
            var testPay = prompt("Do you have a million dollars?? (YES or NO)").toLowerCase();
            if (testPay === "yes") {
                console.log("I known it was cheap for you.");
                confirm("I known it was cheap for you.");
            }
            else {
                console.log("To pay a bill like this, you must, at least, have a million dollars. You lose.");
                confirm("To pay a bill like this, you must, at least, have a million dollars. You lose.");
            }
            break;
        default:
            console.log("Do you choose some of the three optoions? Are you sure? Please, choose Run, Fight ou Pay");
            confirm("Do you choose some of the three optoions? Are you sure? Please, choose Run, Fight ou Pay");
        
    }
}

/*  Starting another function ~> this funciton will change the image when I click on this*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/sf.png') {
      myImage.setAttribute ('src','img/ny.jpg');
      myImage.style.width = '400px';
      myImage.style.height = '300px';
    } else {
      myImage.setAttribute ('src','img/sf.png');
    }
}

var myButton = document.getElementById('testButton');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello, " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}
