/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Suppasan");

console.log(23);

let firstName = "Matilda";
let first = "Suppasan";
let firstNamePerson;

console.log(firstName);
console.log(firstName);
console.log(firstName);

let dante_beatrice = "DB";

let $function = 97;

let Person = "jonas";

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let age = 23; //Number

let customerName = "billick"; //String

let children; //Undefine, Null
 */

/* let javascriptIsFun = true;
let myAge = 23;
let myPet = "cat";

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof myAge);
console.log(typeof myPet);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
 */

/* let age = 30;
age = 31;

const birthYear = 1991;

var job = "Programmer";
console.log(job);

job = "Teacher";
console.log(job);

lastName = "Chaianantakul";
console.log(lastName); */
/* 
//Math Operators
const now = 2024;
const ageBenz = now - 1993;
const ageSarah = now - 2006;
console.log(ageBenz, ageSarah);

console.log(ageBenz * 2, ageBenz / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Suppasan";
const lastName = "Chaianantakul";
console.log(firstName + " " + lastName);

//Asignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators

console.log(ageBenz > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

/* const now = 2024;
const ageBenz = now - 1993;
const ageSarah = now - 2006;
console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

console.log(ageBenz, ageSarah);

const averageAge = (ageBenz + ageSarah) / 2;
console.log(averageAge);
 */

/* const firstName = "Suppasan";
const job = "teacher";
const birthYear = 1993;
const year = 2024;

const introduceSelf =
  "I'm " +
  firstName +
  ", a" +
  " " +
  (year - birthYear) +
  " " +
  "year old" +
  " " +
  job;

console.log(introduceSelf);

const introduceSelfNew = `I'm ${firstName}, a ${
  year - birthYear
} year old ${job}`;
console.log(introduceSelfNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String With
multiple
lines`);
 */

/* const allowAge = 18;
const minnyAge = 15;

if (minnyAge >= allowAge) {
  console.log("Minny can start driving license 🚗");
} else {
  const yearLeft = allowAge - minnyAge;
  console.log(`Minny remain ${yearLeft} year to start driving license ❌`);
}

const birthYear = 1993;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
 */

/* // type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Thailand"));
console.log(typeof NaN);

const s1 = "23";

console.log(s1, String(23), Number(s1), 23);

// type coercion
console.log("I am " + 23 + " years old");

console.log(`I am ${23} years old`);

console.log("23" + "10" + 3);

console.log("23" * "2");
 */

/* // 5 falsy values = 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean("cat"));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
 */

/* const age = "18";

if (age === 18) console.log("You just became an adult (Strict)");

if (age == 18) console.log("You just became an adult (Loose)");

const favourite = Number(prompt("What's your favourite number?"));

console.log(typeof favourite);
console.log(favourite);

if (favourite === 23) {
  console.log(`Cool! ${favourite} is an amazing number`);
} else if (favourite === 7) {
  console.log(`Cool! ${favourite} is also a cool number`);
} else if (favourite === 9) {
  console.log(`Cool! ${favourite} is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`Why not 23?`); */

/* const hasDriversLicense = true; // A
const hasGoodVison = true; // B
const isTired = false; // C

if (hasDriversLicense && hasGoodVison && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
} */

/* const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log(`Learn programming`);
    console.log(`Learn anapanasati`);
    break;
  case "tuesday":
    console.log(`Learn grammar`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Travel`);
    break;
  case "friday":
    console.log(`Practice Motivation`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Learn another programming`);
    break;
  default:
    console.log(`Not a valid day!`);
}

console.log("\n");

if (day === "monday") {
  console.log(`Learn programming`);
  console.log(`Learn anapanasati`);
} else if (day === "tuesday") {
  console.log(`Learn grammar`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Travel`);
} else if (day === "friday") {
  console.log(`Practice Motivation`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Learn another programming`);
} else {
  console.log(`Not a valid day!`);
}
 */

/* 3 + 4;

1993;

true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} year old`); */
