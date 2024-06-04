"use strict";

/* // Primitive types
let lastName = "Williams";
let oldLastName = lastName;

lastName = "Devis";

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = "Devis;";

console.log(jessica.lastName);
console.log(marriedJessica.lastName); */

// Copy objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Devis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
