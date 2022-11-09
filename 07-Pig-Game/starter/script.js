"use strict";

const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
let playerOneTurn = true;
let playerOne = new Player(
  "playerOne",
  0,
  0,
  document.querySelector("#current--0"),
  document.querySelector("#score--0"),
  document.querySelector(".player--0")
);
let playerTwo = new Player(
  "playerTwo",
  0,
  0,
  document.querySelector("#current--1"),
  document.querySelector("#score--1"),
  document.querySelector(".player--1")
);
const activatePlayerSection = function (activePlayer, deactivePlayer) {
  activePlayer.section.classList.add("player--active");
  deactivePlayer.section.classList.remove("player--active");
};
const changePlayers = function (deactivePlayer) {
  deactivePlayer.current = 0;
  deactivePlayer.currentLabel.textContent = deactivePlayer.current;
  playerOneTurn = !playerOneTurn;
  playerOneTurn
    ? activatePlayerSection(playerOne, playerTwo)
    : activatePlayerSection(playerTwo, playerOne);
};

function rollDice(player) {
  let diceFace = Math.trunc(Math.random() * 6) + 1;
  dice.setAttribute("src", `dice-${diceFace}.png`);

  if (diceFace !== 1) {
    player.current += diceFace;
  } else {
    changePlayers(player);
  }
  player.currentLabel.textContent = player.current;
}

function holdCurrentScore(player) {
  player.score += player.current;
  player.scoreLabel.textContent = player.score;
  changePlayers(player);
  console.log(playerOneTurn);
}

btnRoll.addEventListener("click", () => {
  playerOneTurn ? rollDice(playerOne) : rollDice(playerTwo);
});

btnHold.addEventListener("click", () => {
  playerOneTurn ? holdCurrentScore(playerOne) : holdCurrentScore(playerTwo);
});

btnNewGame.addEventListener("click", () => {
  playerOneTurn = true;
  activatePlayerSection(playerOne, playerTwo);
  playerOne.resetScores();
  playerTwo.resetScores();
});
