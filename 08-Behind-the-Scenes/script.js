"use strict";

var firstName = "furiosa";

const benz = {
  firstName: "Suppasan",
  lastName: "Chaianantakul",
  birthYear: 1993,
  location: "thailand",
  job: "polymath",

  calcAge: function () {
    // This ของ function คือ Object ของผู้เรียกใช้ฟังก์ชั่น
    console.log(2024 - this.birthYear);

    const isMillenial = () => {
      return this.birthYear >= 1981 && this.birthYear <= 1996;
    };

    console.log(isMillenial());
  },

  greet1: function () {
    // This ของ function คือชี้ไปที่ Object ของผู้เรียกใช้ฟังก์ชั่น
    console.log(`Hey ${this.firstName}`);
  },

  greet2: () => {
    // This ของ () => คือชี้ไปที่ Window เฉพาะฉนั่นโดยสรุป ห้าม!! ใช้ () => เป็น Method
    console.log(`Hey ${this.firstName}`);
  },
};

benz.calcAge();

benz.greet1();
benz.greet2();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 9, 4);

var addArrow = (a, b) => a + b;
