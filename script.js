
let colorOption = document.queryselectorAll('.square')



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

// Function to change the background color of the colorBox div
function changeColor() {
    const targetColor = document.querySelector('targetColor');
    const randomColor = generateRandomColourRGB();
    colorBox.style.backgroundColor = randomColor;
    console.log(`Generated Color: ${randomColor}`);
}

// Initial color change on page load
changeColor();


 // Function to assign random colors to the buttons and set the correct color
 function assignColors() {
    const buttons = document.querySelectorAll('.colorButton');
    const correctColor = generateRandomColourRGB();

    // Set the colorBox to the correct color
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = correctColor;

    // Assign the correct color to one random button
    const correctButtonIndex = generateRandomNumbersBetween(0, buttons.length - 1);
    buttons[correctButtonIndex].style.backgroundColor = correctColor;

    // Assign random colors to the other buttons
    buttons.forEach((button, index) => {
        if (index !== correctButtonIndex) {
            button.style.backgroundColor = generateRandomColourRGB();
        }
        button.addEventListener('click', () => checkGuess(button.style.backgroundColor, correctColor));
    });
}