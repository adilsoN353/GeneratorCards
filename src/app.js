/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
};
const CARDRANDOM = document.querySelector(".button");
CARDRANDOM.addEventListener("click", generateCard);

function generateCard() {
  let topSymbol = generateRandomTop();
  let numero = generateRandomNumero();
  let color = topSymbol === "♦" || topSymbol === "♥" ? "red" : "black";

  document.querySelector(".parte-superior").innerHTML =
    '<span style="color: ' + color + ';">' + topSymbol + "</span>";
  document.querySelector(".numero").innerHTML =
    '<span style="color: ' + color + ';">' + numero + "</span>";
  document.querySelector(".parte-inferior").innerHTML =
    '<span style="color: ' + color + ';">' + topSymbol + "</span>";
}

function generateRandomNumero() {
  let numero = [
    "A",
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
    "K"
  ];
  return numero[Math.floor(Math.random() * numero.length)];
}

function generateRandomTop() {
  let top = ["♦", "♥", "♠", "♣"];
  return top[Math.floor(Math.random() * top.length)];
}
