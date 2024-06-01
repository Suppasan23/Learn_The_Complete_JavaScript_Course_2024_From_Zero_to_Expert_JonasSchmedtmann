"use strict";

let secretNumber;
let score;
let highScore;

prepareState(0);
prepareHiScore(0);

function setMessage(setMessage) {
  document.querySelector(".message").textContent = setMessage;
}

function setHighScore(setHighscore) {
  document.querySelector(".highscore").textContent = setHighscore;
}

function setScore(setScore) {
  document.querySelector(".score").textContent = setScore;
}

function setNumber(setNumber) {
  document.querySelector(".number").textContent = setNumber;
}

function setGuessValue(setGuess) {
  document.querySelector(".guess").value = setGuess;
}

function getGuessValue() {
  return document.querySelector(".guess").value;
}

function prepareState(state) {
  if (state === 0) {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    setScore(score);
    setGuessValue("");
  }
  setNumber(state === 0 ? "?" : secretNumber);
  setMessage(state === 0 ? "Start guessing..." : "🎉 Correct Number!");
  document.querySelector("body").style.backgroundColor =
    state === 0 ? "#222333" : "#60b347";
  document.querySelector(".number").style.width =
    state === 0 ? "15rem" : "30rem";
  document.querySelector(".number").style.height =
    state === 0 ? "10rem" : "15rem";
}

function prepareHiScore(state) {
  if (state === 0) {
    highScore = 0;
    setHighScore(highScore);
  } else if (state === 1) {
    if (score > highScore) {
      highScore = score;
      setHighScore(highScore);
    }
  }
}

function checkHighLow(state) {
  if (score > 1) {
    score--;
    setMessage(state ? "📈Too High!" : "📉Too Low!");
    setScore(score);
  } else {
    setMessage("😭You lose the game");
    setScore(0);
  }
}

document.querySelector(".again").addEventListener("click", () => {
  prepareState(0);
});

document.querySelector(".guess").addEventListener("click", () => {
  setGuessValue("");
});

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(getGuessValue());

  if (!guess) {
    setMessage("⛔ No number!");
    return;
  }

  if (guess === secretNumber) {
    prepareState(1);
    prepareHiScore(1);
  } else {
    checkHighLow(guess > secretNumber);
  }
});
