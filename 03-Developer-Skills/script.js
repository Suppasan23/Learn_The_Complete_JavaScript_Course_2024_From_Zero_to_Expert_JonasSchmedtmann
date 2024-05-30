// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const temperatures1 = [3, -2, -6, -11, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, 6, -6, "error", -1, 0, 7, 18, -12, 14, "error", 8];

function calcTempAmplitude(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`${max}, ${min}`);
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures1, temperatures2);
console.log(amplitude); */

/* function measureKelvin() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
} 

console.log(measureKelvin());*/

/* function calcTempAmplitudeBug(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`${max}, ${min}`);
  return max - min;
}

const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// Identify bug
console.log(amplitude); */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str.concat(`${arr[i]}◦C in ${i + 1} days ... `);
  }
  console.log("..." + " " + str);
}

printForecast(data1);
