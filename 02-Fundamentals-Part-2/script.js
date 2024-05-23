"use strict";

/* // Declare / Create Function
function fruitProcessor(fruit1, fruit2) {
  const juices = `Here "${fruit1}" juice and "${fruit2}" juice`;
  return juices;
}

// Calling / Running / Invoking Function
console.log(fruitProcessor("apple", "orange"));
console.log(fruitProcessor("grape", "melon")); */

/* // Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

// Function expression (Anonymous function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1993);
console.log(age2);

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1993);
console.log(age3);

// Another Arrow Function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1993, "Benz"));
console.log(yearsUntilRetirement(1980, "Ben")); */

/* // Declare / Create Function
function fruitProcessor(fruit1, fruit2) {
  const fruit1Pieces = cutFruitPieces(fruit1);
  const fruit2Pieces = cutFruitPieces(fruit2);

  const juices1 = `This is a juice of ${fruit1Pieces}`;
  const juices2 = `This is a juice of ${fruit2Pieces}`;
  return juices1, juices2;
}

function cutFruitPieces(fruit) {
  return `4 pieces ${fruit} `;
}

// Calling / Running / Invoking Function
console.log(fruitProcessor("apple", "orange"));
console.log(fruitProcessor("grape", "melon"));
 */
/* 
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎃`);
    return -1;
  }
};

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

console.log(yearsUntilRetirement(1993, "Benz"));
console.log(yearsUntilRetirement(1980, "Benjamin"));

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgDolphins > avgKoalas) {
    return `Koalas win (${avgDolphins} vs. ${avgKoalas})`;
  }
}
 */

/* const friends = ["Mikey", "Steve", "Harry"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jenna";
console.log(friends);

const job = "Gamer";
const suppasan = ["Suppasan", "Chaianantakul", 2024 - 1993, job, friends];

console.log(suppasan);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[0]),
  calcAge(years[years.length - 1]),
]; */

const friends = ["Mikey", "Steve", "Harry"];

// Add element
const newLenght = friends.push("Paul");
console.log(friends);
console.log(newLenght);

friends.unshift("John");
console.log(friends);

// Remove element
const detachElement = friends.pop(); // Detach last element
console.log(friends);
console.log(detachElement);

friends.shift();
console.log(friends);

// Check element
console.log(friends.indexOf("Steve"));
console.log(friends.indexOf("bob"));

friends.push(23);

console.log(friends.includes("Steve"));
console.log(friends.includes("bob"));

if (friends.includes(friends[2])) {
  console.log(`You have a friend called ${friends[2]}`);
} else {
  console.log(`You have not a friend called ${friends[2]}`);
}

function calcTip(bill) {
  if (50 <= bill && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
