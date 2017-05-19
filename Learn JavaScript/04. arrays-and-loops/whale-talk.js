/* 
Take a sentence like, 'Turpentine and turtles,' and translate it into 
its whale talk equivalent: 'UUEEIEE A UUEE'.

There are a few simple rules to translating text to the whale language:

There are no consonants. Only vowels.
The 'u's and 'e's are extra long, so we must double 'u's and 'e's.
*/

var input = prompt('Enter a phrase to translate into whale talk.');
var input = input.toLowerCase();

var vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  else if (input[i] === " ") {
    resultArray.push(input[i]);
  }
}

resultArray = resultArray.join('').toUpperCase();
confirm(resultArray);