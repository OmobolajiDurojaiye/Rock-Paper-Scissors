"use strict";

const playComputer = document.querySelector(".playComputer");
const content = document.querySelector(".content");
const body = document.querySelector(".main");

playComputer.addEventListener("click", function () {
  content.innerHTML = `
    <div class="home">
      <a href ='index.html'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
        </svg>
        Go Home
      </a>
    </div>
    <div class="flash hidden">
        <span class= "flashMessage"></span>  
        <div class = "close">&times;</div>
    </div>
    <div class="gameDashboard">
        <div class="gameBoard">
          <div class="chosenChoices">
            <div class="computerChoice">
              <div class="top">
                <h2>Computer's Choice</h2>
                <span class="computerChoiceDisplay">?</span>
              </div>
            </div>
            <div class="yourChoice">
              <div class="top">
                <h2>Your Choice</h2>
                <span class="yourChoiceDisplay">Let's Play!</span>
              </div>
            </div>
          </div>

          <div class="userChoiceButton">
            <div class="choiceImageContainer rockButton">
              <img src="images/rock-hand.png" alt="" title="Rock" />
            </div>
            <div class="choiceImageContainer paperButton">
              <img src="images/paper-hand.png" alt="" title="Paper" />
            </div>
            <div class="choiceImageContainer scissorsButton">
              <img src="images/scissor-hand.png" alt="" title="Scissors" />
            </div>
          </div>
        </div>

        <div class="scoreBoard">
          <div class="scoreBox">
            <div class="top">
              <h2>Your Score</h2>
            </div>
            <div class="score">
              <h1 class="playerScore">0</h1>
            </div>
          </div>
          <div class="scoreBox">
            <div class="top">
              <h2>Computer's Score</h2>
            </div>
            <div class="score">
              <h1 class="computerScore">0</h1>
            </div>
          </div>
          <div class="reset">
            <button class="again">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-controller"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"
                />
                <path
                  d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"
                />
              </svg>
              Play Again
            </button>
          </div>
        </div>
    </div>
  `;

  //   const hidden = document.querySelector(".hidden");
  const again = document.querySelector(".again");
  const close = document.querySelector(".close");
  const flash = document.querySelector(".flash");
  const flashMessage = document.querySelector(".flashMessage");
  const rockButton = document.querySelector(".rockButton");
  const paperButton = document.querySelector(".paperButton");
  const scissorsButton = document.querySelector(".scissorsButton");
  const yourChoiceDisplay = document.querySelector(".yourChoiceDisplay");
  const computerChoiceDisplay = document.querySelector(
    ".computerChoiceDisplay"
  );
  const playerScoreDisplay = document.querySelector(".playerScore");
  const computerScoreDisplay = document.querySelector(".computerScore");
  const computerChoices = ["Rock", "Paper", "Scissors"];
  let playerScore = 0;
  let computerScore = 0;

  function getRandomChoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      //   flash.classList.remove("hidden");
      //   return (flashMessage.textContent = `It's a tie!!`);
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

  rockButton.addEventListener("click", function () {
    const playerChoice = "Rock";
    const computerChoice = getRandomChoice();
    yourChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    const result = determineWinner(playerChoice, computerChoice);
    if (result === "player") {
      //   flash.classList.remove("hidden");
      playerScore++;
      //   return (flashMessage.textContent = `You got a point!!`);
    } else if (result === "computer") {
      //   flash.classList.remove("hidden");
      computerScore++;
      //   return (flashMessage.textContent = `Computer got a point!!`);
    }

    updateScores();
  });

  paperButton.addEventListener("click", function () {
    const playerChoice = "Paper";
    const computerChoice = getRandomChoice();
    yourChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    const result = determineWinner(playerChoice, computerChoice);
    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    updateScores();
  });

  scissorsButton.addEventListener("click", function () {
    const playerChoice = "Scissors";
    const computerChoice = getRandomChoice();
    yourChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    const result = determineWinner(playerChoice, computerChoice);
    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    updateScores();
  });

  function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 10) {
      flash.classList.remove("hidden");
      // body.style.background = "green";
      return (flashMessage.textContent = `🎉🎉You won!!!`);
    } else if (computerScore === 10) {
      flash.classList.remove("hidden");
      // body.style.background = "green";
      return (flashMessage.textContent = `Computer won🎊🎊!!`);
    }
  }

  if (playerScore === 10) {
    document.style.body.background = "green";
  } else if (computerScore === 10) {
    document.style.body.background = "green";
  }

  close.addEventListener("click", function () {
    flash.classList.add("hidden");
  });

  again.addEventListener("click", function () {
    yourChoiceDisplay.textContent = `Let's Play!`;
    computerChoiceDisplay.textContent = `?`;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    flash.classList.add("hidden");
  });
});
