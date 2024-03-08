/* eslint-disable */
import "bootstrap";
import "./style.css";

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const suits = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  // Initialize the card on page load
  generateCard();
};

function generateCard() {
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("card-value").innerText = randomValue;
  document.getElementById("top-left-suit").innerText = randomSuit;
  document.getElementById("bottom-right-suit").innerText = randomSuit;

  // Check if the selected suit is ♥ or ♦
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.getElementById("card-value").style.color = "red"; // Change value color to red
    document.querySelectorAll(".card-suit").forEach(suit => {
      suit.style.color = "red"; // Change suit color to red
    });
  } else {
    // Reset colors to default for other suits
    document.getElementById("card-value").style.color = "black";
    document.querySelectorAll(".card-suit").forEach(suit => {
      suit.style.color = "black";
    });
  }
}
