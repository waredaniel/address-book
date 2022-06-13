//Business Logic for AddressBook

function AddressBook() {
  this.contactCollection = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) { //AddressBook.prototype.addContact() method takes a Contact object as an argument.
  contact.id = this.assignId();
  this.contactCollection[contact.id] = contact; //we are assigning a new value (the contents of a Contact object) to a new key (firstName)
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Business Logic for Contacts

function Contact(firstName, lastName, phoneNumber)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  // this.fullName = function () {return this.firstName + " " +this.lastName;}
}

Contact.prototype.fullName = function() {
return this.firstName + " " +this.lastName;
};