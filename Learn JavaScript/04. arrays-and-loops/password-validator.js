/* Password validator

The rules for our password validator are:

~> Has at least one uppercase letter
~> Has at least one lowercase letter
~> Is at least 8 characters long
~> Has at least one special character

*/ 

var specialString = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
var specialArray = specialString.split("");

var userPsw = prompt("Please, enter a valid password: ");

isPasswordValid(userPsw);

function isPasswordValid(input) {  
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    confirm("The password is valid!");
  }
  else {
    if (!hasUppercase(input)) {
      console.log("The password needs a uppercase letter.");
    }
    if (!hasLowercase(input)) {
      console.log("The password needs a lowercase letter.");
    }
    if (!isLongEnough(input)) {
      console.log("The password doesn't have at least 8 characters.");
    }
    if (!hasSpecialCharacter(input)) {
      console.log("The password doesn't have special characters.");
    }
    console.log("");
  }
}

function hasUppercase(input) {
  var arrayWithSpecial = [];
  var arrayWithOutSpecial = [];
  var test = false;
  for (var i = 0; i < input.length; i++) {
    if (specialArray.includes(input[i])) {
      arrayWithSpecial.push(input[i]);
    }
    else {
      arrayWithOutSpecial.push(input[i]);
    }
  }

  for (var x = 0; x < input.length; x++) {
    for (var y = 0; y < arrayWithOutSpecial.length; y++) {
      if (arrayWithOutSpecial[y] === arrayWithOutSpecial[y].toUpperCase()) {
        test = true;
        return test;
      }
    }
  }
	return test;
} 

function hasLowercase(input) {
  var arrayWithSpecial = [];
  var arrayWithOutSpecial = [];
  var test = false;
  for (var i = 0; i < input.length; i++) {
    if (specialArray.includes(input[i])) {
      arrayWithSpecial.push(input[i]);
    }
    else {
      arrayWithOutSpecial.push(input[i]);
    }
  }

  for (var x = 0; x < input.length; x++) {
    for (var y = 0; y < arrayWithOutSpecial.length; y++) {
      if (arrayWithOutSpecial[y] === arrayWithOutSpecial[y].toLowerCase()) {
        test = true;
        return test;
      }
    }
  }
	return test;
}

function isLongEnough(input) {
	if (input.length >= 8) {
    return true;
  }
}

function hasSpecialCharacter(input) {
  for(var i = 0; i < input.length; i++) {
    for(var j = 0; j < specialArray.length; j++) {
      if(input[i] === specialArray[j]) {
        return true;
      }
    }
  }
}



































// p.s : The other values in JavaScript that evaluate to false are: 
// 0, -0, undefined, false, null, '', NaN

// Conversely, all other values returned will evaluate to true
// so they are referred to as truthy.