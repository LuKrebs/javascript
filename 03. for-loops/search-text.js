// It's a simple program to find is a name is inside of a longer string. 
// The main objective here is to learn and work the basics concepts of JavaScript programming.

var text = "Hey, how are you \
doing Luciano? My name is Luciano too. Luciano is a beatiful name. \
I known a website called Lucianok.tech! It's yours personal website? \
Amazing Luciano!! ";

var myName = "Luciano";
var hits = [];

for (var i = 0; i < text.length; i++) {
	if (text[i] === "L") {
		for (var j = i; j < i + myName.length; j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
}
else {
	console.log(hits);
}