// Learning if/else statment


// 1º statment
var harryPotterFan = true;

if (harryPotterFan) {
    console.log("Mischief managed.");
}
else {
	console.log('I lead a muggle\'s life.');
}

console.log("");

// 2º statment
var hungerLevel = 10;

if (hungerLevel > 7) {
  console.log('Time to eat!');
}
else {
  console.log('Let\'s eat later.');
}

console.log("");

// 3º statment with if/else if/else
var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log("'Howwwwlll!!'");
}
else if (moonPhase === 'mostly full') {
	console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new') {
	console.log('Back on two feet');
}
else {
  console.log('Invalid moon phase');
}

console.log("");

// 4º statment with if/else if/else and && or || or ! operators
var moonPhase = 'full';
var foggyNight = true;

if (moonPhase === 'full' && foggyNight) {
  console.log("'Howwwwlll!!'");
}
else if (moonPhase === 'mostly full') {
	console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new') {
	console.log('Back on two feet');
}
else {
  console.log('Invalid moon phase');
}

console.log("");

//5º Turning my if/else if/else statment into a switch statment
var moonPhaseTwo = 'mostly full';

switch(moonPhaseTwo) {
  case 'full':
    console.log("'Howwwwlll!!'");
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
		console.log('Back on two feet');
    break;
  default:
    console.log("Invalid moon phase");
    break;
}