// It's a simple challenge to use JavaScript to convert my age into dog years.

//The above line of code only work in the browser
// var myAge = prompt('What is your age?');
var myAge = 23;
var firstYears = 2 * 10.5;
var laterYears = (myAge - 2) * 4;
var myAgeInDogYears = laterYears + firstYears;

console.log("My current age is " + myAge + ". My age in dog years is " + myAgeInDogYears + ".");