function contactListChallenge() {
	var contact = {};

	var userFirstName = prompt("What's the first name of your new contact?");
	contact.firstName = userFirstName;
	var userLastName = prompt("What's the last name of your new contact?");
	contact.lastName = userLastName; 
	var userPhone = prompt("Whats the phone of your new contactc?");
	contact.phone = userPhone;

	confirm("So, this is your new contact is: " + contact.firstName + " " + contact.lastName);
	confirm("The phone number is: " + contact.phone);
}