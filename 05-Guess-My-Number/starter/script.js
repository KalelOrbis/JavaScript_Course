"use strict";

let secretNumber = 0;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (nScore) {
  document.querySelector(".label-score").textContent = `💯 Score ${nScore}`;
};

window.onload = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  highScore = JSON.parse(localStorage.getItem("highscore"));
  document.querySelector(
    ".label-highscore"
  ).textContent = `🥇 Highscore: ${highScore}`;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔ NOT A NUMBER");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct guess!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${highScore}`;
      localStorage.setItem("highscore", JSON.stringify(highScore));
    }
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      displayMessage();
      guess > secretNumber
        ? "☝️Too high, try again..."
        : "👇 Too low, try again...";
      score--;
      displayScore(score);
    } else {
      displayMessage("😭 Gameover ");
      document.querySelector("body").style.backgroundColor = "#ff1616";
      displayScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  displayMessage("Start guessing... ");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  displayScore(score);
});
