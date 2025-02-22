"use strict";

let highscore = 0;
let score = 20;
let secretNumber = Number(Math.round(Math.random() * 20));

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input").value);

  if (!guess) {
    document.querySelector(".message").innerHTML = "Choose a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").innerHTML = "Correct Guess! :)";
    document.querySelector(".message").style.color = "#0ff5a8";
    document.querySelector("body").style.backgroundColor = "#0ff5a8";
    document.querySelector(".guess").innerHTML = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").style.color = "#dc2828";
      document.querySelector(".message").innerHTML =
        guess > secretNumber ? "Too high!" : "Too Low!";
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = "You Lost!";
      document.querySelector(".score").innerHTML = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").innerHTML = score;
  secretNumber = Number(Math.round(Math.random() * 20)) + 1;
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".message").style.color = "#d1d5db";
  document.querySelector(".input").value = "";
  document.querySelector(".guess").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "#111827";
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").innerHTML = score;
  secretNumber = Number(Math.round(Math.random() * 20)) + 1;
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".message").style.color = "#d1d5db";
  document.querySelector(".input").value = "";
  document.querySelector(".highscore").innerHTML = 0;
  document.querySelector(".guess").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "#111827";
});
