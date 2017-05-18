// Freeform basic project
// Asking for the user to input the variable in kelvin and after that we log the temparature in fahrenheit


// The line of code above only work with the browser
// var kelvin = prompt('What is the Kelvin temperature today?');
var kelvin = 293;
var celsius = kelvin - 273;

var fahrenheit = celsius * (9/5) + 32;

console.log('The temperature is ' + fahrenheit + ' fahrenheit.');