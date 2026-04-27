// ===== GAME VARIABLES =====
let lives = 3;
let score = 0;
let correctColor = "";

// ===== START GAME =====
function startGame() {
  lives = 3;
  score = 0;

  document.getElementById("lives").innerText = lives;
  document.getElementById("score").innerText = score;

  nextRound();
}

// ===== NEW ROUND =====
function nextRound() {
  let boxes = document.getElementsByClassName("box");

  // generate random colors
  for (let i = 0; i < boxes.length; i++) {
    let color = randomColor();
    boxes[i].style.background = color;
    boxes[i].onclick = checkAnswer;
  }

  // pick correct answer
  let randomIndex = Math.floor(Math.random() * 3);
  correctColor = boxes[randomIndex].style.background;

  document.getElementById("rgbValue").innerText = correctColor;
  document.getElementById("message").innerText = "";
}

// ===== CHECK ANSWER =====
function checkAnswer(event) {
  let chosenColor = event.target.style.background;

  if (chosenColor === correctColor) {
    score++;
    document.getElementById("message").innerText = "Correct!";
  } else {
    lives--;
    document.getElementById("message").innerText = "Wrong!";
  }

  // update display
  document.getElementById("lives").innerText = lives;
  document.getElementById("score").innerText = score;

  // game over
  if (lives === 0) {
    document.getElementById("message").innerText = "Game Over! Final Score: " + score;
    return;
  }

  // next round
  setTimeout(nextRound, 800);
}

// ===== RANDOM COLOR FUNCTION =====
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// start game first time
startGame();