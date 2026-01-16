console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;


console.log("Script Running");

// Helper function to shift the position of a scooter sprite in the grid

// Query selectors for all buttons and scooters
const pepperoniButton = document.querySelector("#movePepperoniButton");
const veggieButton = document.querySelector("#moveVeggieButton");
const bbqButton = document.querySelector("#moveBBQButton");

// Assuming you have divs or other elements representing the scooters
const pepperoniSprite = document.querySelector("#pepperoniSprite");
const veggieSprite = document.querySelector("#veggieSprite");
const bbqSprite = document.querySelector("#bbqSprite");

// Function that moves the pepperoni scooter forward
const movePepperoniScooter = () => {
  pepperoni_step++; // Move one step forward
  
  // Ensure the pepperoni scooter doesn't exceed column 7
  if (pepperoni_step > 7) pepperoni_step = 7;

  // Call the helper function to update the scooter position
  shift(pepperoniSprite, pepperoni_step);

  checkWinner();
};


const moveVeggieScooter = () => {
  veggie_step++; 
  
  if (veggie_step > 7) veggie_step = 7;

  shift(veggieSprite, veggie_step);

  // Check if the veggie scooter reached column 7
  checkWinner();
};

// Function that moves the BBQ scooter forward
const moveBBQScooter = () => {
  bbq_step++; // Move one step forward
  
  // Ensure the BBQ scooter doesn't exceed column 7
  if (bbq_step > 7) bbq_step = 7;

  // Call the helper function to update the scooter position
  shift(bbqSprite, bbq_step);

  // Check if the BBQ scooter reached column 7
  checkWinner();
};

// Function that checks if any scooter has reached column 7 (winner)
const checkWinner = () => {
  // Check if any scooter has won
  if (pepperoni_step === 7) {
    displayWinner("Pepperoni scooter wins!");
    disableButtons();
  } else if (veggie_step === 7) {
    displayWinner("Veggie scooter wins!");
    disableButtons();
  } else if (bbq_step === 7) {
    displayWinner("BBQ scooter wins!");
    disableButtons();
  }
};

// Function to display the winner message
const displayWinner = (message) => {
  const winnerMessage = document.createElement("div");
  winnerMessage.textContent = message;
  winnerMessage.style.position = "fixed";
  winnerMessage.style.top = "50%";
  winnerMessage.style.left = "50%";
  winnerMessage.style.transform = "translate(-50%, -50%)";
  winnerMessage.style.fontSize = "2em";
  winnerMessage.style.fontWeight = "bold";
  winnerMessage.style.color = "green";
  document.body.appendChild(winnerMessage);
};

// Function to disable all buttons when a winner is found
const disableButtons = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.disabled = true);
};

// Add event listeners for each button
pepperoniButton.addEventListener("click", movePepperoniScooter);
veggieButton.addEventListener("click", moveVeggieScooter);
bbqButton.addEventListener("click", moveBBQScooter);
