// Learning arrays
console.log("");
var bucketList = ["Luciano", "Software Engineer", "San Francisco"];
console.log(bucketList);

// Getting the first item in a arrray
var firstItem = bucketList[0];
console.log("First item:")
console.log(firstItem);

// Getting the last item in a array
lastItem = bucketList[bucketList.length-1];
console.log("Last item:")
console.log(lastItem);

// Getting the length of some array
console.log("Lenght of the array:")
console.log(bucketList.length);

// Using the .length method with strings
console.log("");
var sf = "San Francisco";
var sfLen = sf.length;
console.log(sf);
console.log("The length of the variable");
console.log(sf.length);
console.log("Working with the 'substring' method");
console.log(sf.substring(0,4));

// Using .push built in method
console.log("");
console.log("Working with .push: add 'Drone' and '3D Printing' to bucketList");
bucketList.push('Drone', '3D Printing', 'Bike');
console.log(bucketList);

// Using .pop built in method
console.log("");
console.log("Working with .pop built in method");
bucketList.pop();
console.log(bucketList);