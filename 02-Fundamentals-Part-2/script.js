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
