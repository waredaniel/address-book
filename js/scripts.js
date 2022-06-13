//Business Logic for AddressBook

function AddressBook() {
  this.contactCollection = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) { //AddressBook.prototype.addContact() method takes a Contact object as an argument.
  contact.id = this.assignId();
  this.contactCollection[contact.id] = contact; 
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contactCollection[id] != undefined ) {
    return this.contactCollection[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  if (this.contactCollection[id] === undefined) {
    return false;
  }
  delete this.contactCollection[id];
  return true;
}

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

