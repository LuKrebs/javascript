// Quick review on objects

var bob = {	
	firstName: "Bob",
	lastName: "Jones",
	phoneNumber: "(650) 777 7777",
	email: "bob.jones@example.com"
};

console.log("");
console.log("Logs the bob's information: ");
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

var mary = {
    firstName: "Mary",
    lastName:  "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

console.log("");
console.log("Logs the mary's information: ");
console.log(mary.firstName);
console.log(mary.lastName);
console.log(mary.email);

contacts = [bob, mary];

console.log("");
console.log("Printing the mary's phoneNumber: " + contacts[1].phoneNumber);

function printPerson(person) {
	console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i =  0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName) {
	var contactsLength = contacts.length;
	for (var i =  0; i < contactsLength; i++) {
		if (contacts[i].lastName === lastName) {
			printPerson(contacts[i]);
		}	
	}
}

// Creating a function that add a contact to the last position in the array 'contacts'
function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    }
}

// Adding a new contact to my 'contacts' array:
add("Luciano", "Krebs", "luciano@tech.com", "555 555 555");

console.log("");
console.log("Printing all of the the first name and last name using printPerson function:");
list();

console.log("");
console.log("searching for the 'Jones' and 'Krebs' last name using the search function:")
search("Jones");
search("Krebs");
