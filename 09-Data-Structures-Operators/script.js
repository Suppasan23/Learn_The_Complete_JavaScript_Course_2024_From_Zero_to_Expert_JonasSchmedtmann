"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 Hour
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing) {
    console.log(
      `Here is your delicious pasta with ${ing[0]},${ing[1]} and ${ing[2]}`
    );
  },
};

const newRestaurant = { foundIn: 1998, ...restaurant, founder: "Gutstave" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";

console.log(restaurantCopy.name);
console.log(restaurant.name);

/* const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
]; */

/* restaurant.orderPasta(ingredients);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Joint 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: array, strings, maps, sets. NOT object
const str = "Suppasan";
const letters = [...str, "", "S."];
console.log(letters);
console.log(letters[6]);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr); */

/* restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: "songkhla",
  starterIndex: 3,
}); */

/* // Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c); */

/* // Mutating values
let a = 111;
let b = 999;
const moutain = { a: 23, b: 7, c: 14 };

const { a: aa, b: bb } = moutain;
console.log(aa, bb); */

/* // Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu);
console.log(starters); */

/* const {
  name: theName,
  openingHours: theOpeningHours,
  categories: theCat,
} = restaurant;
console.log(theName, theOpeningHours, theCat);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
 */

/* 
const sArray = [8, 8];
const [p = 1, d = 1, t = 1] = sArray;
console.log(p, d, t);

const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

const [starterCourse, mainCourse] = restaurant.order(1, 1);
console.log(starterCourse, mainCourse);

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

const cat = ["persia", "Bengal", "Birman", "Toyger"];
const [cat1, cat2, cat3, cat4, cat5] = cat;

console.log(cat1, cat2, cat3, cat4, cat5);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
 */
