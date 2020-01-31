class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

let contactBook = new AddressBook();
contactBook.add(
  "Shaquonda",
  "tharealest81@gmail.com",
  "313.222.4343",
  "Friend"
);
contactBook.add("Shawn", "reeeiiii@gmail.com", "313.222.4494", "friend");
contactBook.add("Dawn", "slburns@yahoo.com", "445.422.1900", "Family");

console.log(contactBook);

//function expression
const print = function(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
};



//function declaration
// function print(addressBookReference) {
//   addressBookReference.contacts.forEach(contact => {
//     console.log(contact);
//   });
// }

//arrow function
// const print = addressBookReference => {
//   addressBookReference.contacts.forEach(contact => {
//     console.log(contact);
//   });
// };

print(contactBook);
