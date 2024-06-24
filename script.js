"use strict";

const instructionContainer = document.querySelector(".instructionContainer");
const closeInstruction = document.querySelector(".closeInstruction");
const howToPlay = document.querySelector(".howToPlay");

howToPlay.addEventListener("click", function () {
  instructionContainer.classList.remove("hidden");
});

closeInstruction.addEventListener("click", function () {
  instructionContainer.classList.add("hidden");
});
