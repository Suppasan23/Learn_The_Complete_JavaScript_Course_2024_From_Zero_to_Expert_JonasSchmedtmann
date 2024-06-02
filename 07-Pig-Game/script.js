"use strict";

const newGameBTN = document.querySelector(".btn--new");
const diceImage = document.querySelector(".dice");
const rollDiceBTN = document.querySelector(".btn--roll");
const holdBTN = document.querySelector(".btn--hold");

const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
const name1 = document.getElementById("name--1");
const name2 = document.getElementById("name--2");
const totalScore1 = document.getElementById("total-score--1");
const totalScore2 = document.getElementById("total-score--2");
const currentScore1 = document.getElementById("current-score--1");
const currentScore2 = document.getElementById("current-score--2");

const arrayOfSection = [
  [player1, name1, totalScore1, currentScore1],
  [player2, name2, totalScore2, currentScore2],
];

newGame();

function newGame() {
  player1.className = "player player--1 player--active";
  player2.className = "player player--2 ";
  name1.textContent = "Player 1";
  name2.textContent = "Player 2";
  totalScore1.textContent = 80;
  totalScore2.textContent = 80;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  diceImage.classList.add("hidden");
  console.log("reset");
}

function whoActive() {
  if (player1.classList.contains("player--active")) {
    return arrayOfSection[0];
  } else if (player2.classList.contains("player--active")) {
    return arrayOfSection[1];
  }
}

function togglePlayer() {
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

function winnerYet() {
  if (whoActive()[0].classList.contains("player--winner")) {
    return true;
  } else {
    return false;
  }
}

newGameBTN.addEventListener("click", () => newGame());

rollDiceBTN.addEventListener("click", () => {
  if (winnerYet()) return;

  const randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
  diceImage.src = `dice-${randomNumber}.png`;
  diceImage.classList.remove("hidden");

  if (randomNumber === 1) {
    whoActive()[3].textContent = 0;
    togglePlayer();
  } else {
    whoActive()[3].textContent =
      Number(whoActive()[3].textContent) + randomNumber;
  }
});

holdBTN.addEventListener("click", () => {
  if (winnerYet()) return;

  whoActive()[2].textContent =
    Number(whoActive()[2].textContent) + Number(whoActive()[3].textContent);

  whoActive()[3].textContent = 0;

  if (whoActive()[2].textContent >= 100) {
    whoActive()[0].classList.add("player--winner");
    return;
  }

  togglePlayer();
});
