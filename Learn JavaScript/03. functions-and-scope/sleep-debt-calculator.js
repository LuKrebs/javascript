function getSleepHours(day) {
  var hours = prompt("How many hours did you sleep on " + day + " in this week?");
  return Number(hours);
}

function getActualSleepHours() {
  var sun = getSleepHours("Sun");
  var mon = getSleepHours("Mon");
  var tue = getSleepHours("Tue");
  var wed = getSleepHours("Wed");
  var the = getSleepHours("Thu");
  var fri = getSleepHours("Fri");
  var sat = getSleepHours("Sat");
  var totalHoursSleep = sun + mon + tue + wed + the + fri + sat;
  return totalHoursSleep;
}

function getIdealSleepHours() {
  var idealPerNight = prompt("How many hours do you believe that is the ideal to sleep per night?");
  return idealPerNight * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
  	console.log("Really good! You got the perfect amount of sleep");
    console.log("Last week you sleep " + actualSleepHours + " hours");
    console.log("The ideal amount you really want is " + idealSleepHours + " hours");
    console.log("Your debt of sleep in hours is 0");
	}
  else if (actualSleepHours > idealSleepHours) {
    console.log("Maybe you are sleeping to much!");
    console.log("Last week you sleep " + actualSleepHours + " hours");
    console.log("The ideal amount you really want is " + idealSleepHours + " hours");
    console.log("You slept " + (actualSleepHours - idealSleepHours) + " hours more than the normal");
  }
  else {
    console.log("Think twice! Maybe is time to take some rest!");
    console.log("Last week you sleep " + actualSleepHours + " hours");
    console.log("The ideal amount you really want is " + idealSleepHours + " hours");
    console.log("You slept " + (idealSleepHours - actualSleepHours) + " hours less than the normal");
  }
}

calculateSleepDebt();