let score = 0; // Initialize score counter

// Function to generate a random number between min and max (inclusive)
function generateRandomNumbersBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
function generateRandomColourRGB() {
  const red = generateRandomNumbersBetween(0, 255);
  const green = generateRandomNumbersBetween(0, 255);
  const blue = generateRandomNumbersBetween(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to assign random colors to the buttons and set the correct color
function assignColors() {
  const colorOptions = document.querySelectorAll(".square");
  const correctColor = generateRandomColourRGB();

  // Set the colorBox to the correct color
  const targetColor = document.querySelector(".targetColor");
  targetColor.style.backgroundColor = correctColor;

  // Assign the correct color to one random button
  const correctButtonIndex = generateRandomNumbersBetween(
    0,
    colorOptions.length - 1
  );
  colorOptions[correctButtonIndex].style.backgroundColor = correctColor;

  // Assign random colors to the other buttons
  colorOptions.forEach((colorOption, index) => {
    if (index !== correctButtonIndex) {
      colorOption.style.backgroundColor = generateRandomColourRGB();
    }
    colorOption.addEventListener("click", () =>
      checkGuess(colorOption.style.backgroundColor, correctColor)
    );
  });
}

// Function to check if the guessed color is correct
function checkGuess(guessedColor, correctColor) {
  const feedback = document.querySelector(".gameStatus");
  const scoreDisplay = document.getElementById("score");

  if (guessedColor === correctColor) {
    feedback.textContent = "Correct! You guessed the right color!";
    feedback.style.color = "green";
    score++; // Increment score
    scoreDisplay.textContent = score ;
    assignColors(); // Generate new colors for the next round
  } else {
    feedback.textContent = "Wrong guess! Try again.";
    feedback.style.color = "red";
  }
}

// Add event listener to the reset button
document.getElementById("newGameButton").addEventListener("click", () => {
  score = 0; // Reset score
  document.getElementById("score").textContent = `Score: ${score}`;
  document.querySelector(".gameStatus").textContent = ""; // Clear feedback
  assignColors(); // Reset colors
});

// Initial setup
assignColors();
