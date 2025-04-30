"use strict";

// Get play computer button
const playComputer = document.getElementById("playComputer");
const content = document.querySelector(".content");

// Event listener for when user clicks "Play vs Computer"
playComputer.addEventListener("click", function () {
  // Create new game interface
  content.innerHTML = `
    <div class="game-header">
      <a href="index.html" class="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
        </svg>
        <span>Home</span>
      </a>
      <div class="round-display">Round: <span class="round-number">1</span></div>
    </div>

    <div class="game-status">
      <div class="status-message">Choose your move!</div>
      <div class="countdown-timer hidden">3</div>
    </div>

    <div class="gameDashboard">
      <div class="score-board">
        <h2 class="score-title">Scoreboard</h2>
        <div class="score-container">
          <div class="score-box">
            <div class="score-label">You</div>
            <div class="score-value player-score">0</div>
          </div>
          <div class="vs-divider">:</div>
          <div class="score-box">
            <div class="score-label">Computer</div>
            <div class="score-value computer-score">0</div>
          </div>
        </div>
        
        <div class="result-message"></div>
        
        <div class="streak-container">
          <div class="streak-label">Your Streak</div>
          <div class="streak-indicator">
            <div class="streak-flames">🔥</div>
            <div class="streak-count">0</div>
          </div>
        </div>

        <button class="play-again-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079z"/>
          </svg>
          Play Again
        </button>
        
        <a href="index.html" class="home-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
          </svg>
          Back to Menu
        </a>
      </div>

      <div class="gameBoard">
        <div class="chosenChoices">
          <div class="choice-box computer-choice-box">
            <h3>Computer's Choice</h3>
            <div class="choice-display computer-choice-display">?</div>
          </div>
          <div class="vs-indicator">VS</div>
          <div class="choice-box player-choice-box">
            <h3>Your Choice</h3>
            <div class="choice-display player-choice-display">
              <span class="waiting-text">Select below</span>
            </div>
          </div>
        </div>

        <div class="choice-buttons">
          <button class="choice-btn rock-btn" data-choice="Rock">
            <img src="images/rock-hand.png" alt="Rock" />
          </button>
          <button class="choice-btn paper-btn" data-choice="Paper">
            <img src="images/paper-hand.png" alt="Paper" />
          </button>
          <button class="choice-btn scissors-btn" data-choice="Scissors">
            <img src="images/scissor-hand.png" alt="Scissors" />
          </button>
        </div>
      </div>
    </div>

    <div class="game-overlay hidden">
      <div class="game-result">
        <div class="result-icon"></div>
        <div class="result-title"></div>
        <div class="result-score"></div>
        <button class="continue-btn">Continue</button>
      </div>
    </div>
  `;

  // Game initialization and variable setup
  const statusMessage = document.querySelector(".status-message");
  const countdownTimer = document.querySelector(".countdown-timer");
  const playerChoiceDisplay = document.querySelector(".player-choice-display");
  const computerChoiceDisplay = document.querySelector(
    ".computer-choice-display"
  );
  const playerScoreDisplay = document.querySelector(".player-score");
  const computerScoreDisplay = document.querySelector(".computer-score");
  const resultMessage = document.querySelector(".result-message");
  const streakCount = document.querySelector(".streak-count");
  const streakFlames = document.querySelector(".streak-flames");
  const roundNumber = document.querySelector(".round-number");
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const playAgainBtn = document.querySelector(".play-again-btn");
  const gameOverlay = document.querySelector(".game-overlay");
  const gameResult = document.querySelector(".game-result");
  const resultIcon = document.querySelector(".result-icon");
  const resultTitle = document.querySelector(".result-title");
  const resultScore = document.querySelector(".result-score");
  const continueBtn = document.querySelector(".continue-btn");

  // Game state variables
  const choices = ["Rock", "Paper", "Scissors"];
  let playerScore = 0;
  let computerScore = 0;
  let playerStreak = 0;
  let currentRound = 1;
  let gameActive = true;
  const winningScore = 10;

  // Computer AI difficulty (higher = smarter)
  const computerDifficulty = 0.7; // 70% smart decisions, 30% random

  // Audio effects (commented out - uncomment if you have audio files)
  // const selectSound = new Audio("sounds/select.mp3");
  // const winSound = new Audio("sounds/win.mp3");
  // const loseSound = new Audio("sounds/lose.mp3");
  // const tieSound = new Audio("sounds/tie.mp3");

  // Initialize the game
  function initGame() {
    updateScoreDisplay();
    updateStreakDisplay();
    enableChoiceButtons();
    playerChoiceDisplay.innerHTML =
      '<span class="waiting-text">Select below</span>';
    computerChoiceDisplay.textContent = "?";
    resultMessage.textContent = "";
    gameActive = true;
  }

  // Get computer's choice (simple AI)
  function getComputerChoice(playerPatterns) {
    // Use difficulty to determine if computer makes smart or random choice
    if (Math.random() < computerDifficulty) {
      // Smart choice based on player's previous selections
      // This creates the illusion that the computer learns from your patterns
      if (playerPatterns.length >= 3) {
        const lastChoice = playerPatterns[playerPatterns.length - 1];

        // If player tends to repeat choices
        if (
          playerPatterns[playerPatterns.length - 2] === lastChoice &&
          playerPatterns[playerPatterns.length - 3] === lastChoice
        ) {
          // Choose what beats the player's likely next choice
          switch (lastChoice) {
            case "Rock":
              return "Paper";
            case "Paper":
              return "Scissors";
            case "Scissors":
              return "Rock";
          }
        }

        // If player alternates between two choices
        if (
          playerPatterns[playerPatterns.length - 3] === lastChoice &&
          playerPatterns[playerPatterns.length - 2] !== lastChoice
        ) {
          // Predict that pattern continues and counter it
          const likelyNext = playerPatterns[playerPatterns.length - 2];
          switch (likelyNext) {
            case "Rock":
              return "Paper";
            case "Paper":
              return "Scissors";
            case "Scissors":
              return "Rock";
          }
        }
      }
    }

    // Fallback to random choice
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Player choice history for computer AI
  let playerChoiceHistory = [];

  // Handle player's choice
  function handlePlayerChoice(playerChoice) {
    if (!gameActive) return;

    // Disable buttons during animation
    disableChoiceButtons();

    // Play select sound
    // selectSound.play();

    // Update display with player's choice
    playerChoiceDisplay.innerHTML = `<span class="choice-text">${playerChoice}</span>`;
    playerChoiceDisplay.classList.add("animate-choice");

    // Add to player history for computer AI
    playerChoiceHistory.push(playerChoice);

    // Start countdown animation
    startCountdown();
  }

  // Countdown animation before showing computer's choice
  function startCountdown() {
    countdownTimer.classList.remove("hidden");
    statusMessage.textContent = "Computer is choosing...";

    let count = 3;
    countdownTimer.textContent = count;

    const countdown = setInterval(() => {
      count--;
      countdownTimer.textContent = count;

      if (count <= 0) {
        clearInterval(countdown);
        countdownTimer.classList.add("hidden");
        resolveRound();
      }
    }, 500);
  }

  // Resolve the round after countdown
  function resolveRound() {
    const playerChoice = playerChoiceDisplay.textContent;
    const computerChoice = getComputerChoice(playerChoiceHistory);

    // Display computer's choice with animation
    computerChoiceDisplay.textContent = computerChoice;
    computerChoiceDisplay.classList.add("animate-choice");

    // Determine winner
    const result = determineWinner(playerChoice, computerChoice);

    // Update score based on result
    updateScore(result);

    // Show result message
    displayResult(result, playerChoice, computerChoice);

    // Update round number
    currentRound++;
    roundNumber.textContent = currentRound;

    // Check if game is over
    if (playerScore >= winningScore || computerScore >= winningScore) {
      endGame();
    } else {
      // Re-enable choice buttons after a short delay
      setTimeout(() => {
        computerChoiceDisplay.classList.remove("animate-choice");
        playerChoiceDisplay.classList.remove("animate-choice");
        enableChoiceButtons();
        statusMessage.textContent = "Choose your move!";
      }, 1500);
    }
  }

  // Determine the winner of a round
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
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

  // Update the score based on the round result
  function updateScore(result) {
    if (result === "player") {
      playerScore++;
      playerStreak++;
      // winSound.play();
    } else if (result === "computer") {
      computerScore++;
      playerStreak = 0;
      // loseSound.play();
    } else {
      // tieSound.play();
      // Streak is not affected by ties
    }

    updateScoreDisplay();
    updateStreakDisplay();
  }

  // Update score display
  function updateScoreDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

  // Update player streak display
  function updateStreakDisplay() {
    streakCount.textContent = playerStreak;

    // Add visual effects for streak
    if (playerStreak >= 3) {
      streakFlames.classList.add("active");
      streakFlames.innerHTML = "🔥".repeat(Math.min(playerStreak, 5));
    } else {
      streakFlames.classList.remove("active");
      streakFlames.innerHTML = "🔥";
    }
  }

  // Display round result with appropriate styling
  function displayResult(result, playerChoice, computerChoice) {
    const playerChoiceBox = document.querySelector(".player-choice-box");
    const computerChoiceBox = document.querySelector(".computer-choice-box");

    // Reset previous highlights
    playerChoiceBox.classList.remove("win-highlight");
    computerChoiceBox.classList.remove("win-highlight");

    if (result === "player") {
      resultMessage.innerHTML = `<span class="winner-text">You win!</span> ${playerChoice} beats ${computerChoice}`;
      playerChoiceBox.classList.add("win-highlight");
    } else if (result === "computer") {
      resultMessage.innerHTML = `<span class="loser-text">Computer wins!</span> ${computerChoice} beats ${playerChoice}`;
      computerChoiceBox.classList.add("win-highlight");
    } else {
      resultMessage.innerHTML = `<span class="tie-text">It's a tie!</span> Both chose ${playerChoice}`;
    }
  }

  // Enable all choice buttons
  function enableChoiceButtons() {
    choiceButtons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("disabled");
    });
  }

  // Disable all choice buttons (during animations)
  function disableChoiceButtons() {
    choiceButtons.forEach((button) => {
      button.disabled = true;
      button.classList.add("disabled");
    });
  }

  // End the game when a player reaches the winning score
  function endGame() {
    gameActive = false;

    // Prepare end game overlay
    const isPlayerWinner = playerScore >= winningScore;

    if (isPlayerWinner) {
      resultIcon.innerHTML = "🏆";
      resultTitle.textContent = "Victory!";
      resultTitle.classList.add("winner-text");
      // winSound.play();
    } else {
      resultIcon.innerHTML = "😢";
      resultTitle.textContent = "Defeat!";
      resultTitle.classList.add("loser-text");
      // loseSound.play();
    }

    resultScore.textContent = `Final Score: ${playerScore} - ${computerScore}`;

    // Show game over overlay with animation
    setTimeout(() => {
      gameOverlay.classList.remove("hidden");
      gameOverlay.classList.add("fade-in");
      gameResult.classList.add("pop-in");
    }, 1000);
  }

  // Reset the game
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerStreak = 0;
    currentRound = 1;
    playerChoiceHistory = [];
    roundNumber.textContent = currentRound;

    const playerChoiceBox = document.querySelector(".player-choice-box");
    const computerChoiceBox = document.querySelector(".computer-choice-box");
    playerChoiceBox.classList.remove("win-highlight");
    computerChoiceBox.classList.remove("win-highlight");

    resultTitle.classList.remove("winner-text", "loser-text");

    initGame();
  }

  // Event listeners for choice buttons
  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const choice = this.getAttribute("data-choice");
      handlePlayerChoice(choice);
    });
  });

  // Play again button event listener
  playAgainBtn.addEventListener("click", resetGame);

  // Continue button in game over overlay
  continueBtn.addEventListener("click", function () {
    gameOverlay.classList.add("hidden");
    gameOverlay.classList.remove("fade-in");
    gameResult.classList.remove("pop-in");
    resetGame();
  });

  // Initialize the game when component loads
  initGame();

  // Add these CSS rules to the document
  const gameStyles = document.createElement("style");
  gameStyles.textContent = `
    /* Game Header Styles */
    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 1.5rem;
      padding: 0 1rem;
    }

    .home-button {
      display: flex;
      align-items: center;
      color: var(--text-dark);
      text-decoration: none;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      background-color: white;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }

    .home-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .round-display {
      font-weight: 600;
      background-color: var(--primary-yellow);
      padding: 0.5rem 1.5rem;
      border-radius: 25px;
      box-shadow: var(--shadow);
    }

    .round-number {
      font-size: 1.2rem;
      font-weight: 700;
    }

    /* Game Status Styles */
    .game-status {
      width: 100%;
      text-align: center;
      margin-bottom: 2rem;
      position: relative;
    }

    .status-message {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .countdown-timer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
      font-weight: 700;
      color: var(--primary-yellow);
      text-shadow: 0 0 10px rgba(255, 234, 0, 0.7);
      z-index: 10;
      animation: pulseSize 1s infinite;
    }

    @keyframes pulseSize {
      0% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.2); }
      100% { transform: translate(-50%, -50%) scale(1); }
    }

    /* Main Game Layout */
    .gameDashboard {
      display: flex;
      width: 100%;
      gap: 2rem;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    /* Game Board & Choices Styles */
    .gameBoard {
      flex: 1;
      min-width: 300px;
      order: 2;
    }

    .chosenChoices {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .choice-box {
      background: white;
      border-radius: 15px;
      padding: 1.5rem;
      flex: 1;
      min-width: 180px;
      box-shadow: var(--shadow);
      text-align: center;
      transition: var(--transition);
      position: relative;
    }

    .choice-box h3 {
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .choice-display {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .waiting-text {
      color: #999;
      font-style: italic;
    }

    .choice-text {
      font-size: 2rem;
      font-weight: 700;
    }

    .vs-indicator {
      font-size: 1.5rem;
      font-weight: 700;
      background-color: var(--primary-yellow);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: var(--shadow);
      z-index: 1;
    }

    .choice-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .choice-btn {
      background: white;
      border: none;
      border-radius: 15px;
      width: 110px;
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--shadow);
      overflow: hidden;
      position: relative;
    }

    .choice-btn::after {
      content: attr(data-choice);
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
      font-size: 0.9rem;
      color: var(--text-dark);
      opacity: 0;
      transition: var(--transition);
    }

    .choice-btn:hover::after {
      opacity: 1;
    }

    .choice-btn img {
      width: 65%;
      height: 65%;
      object-fit: contain;
      transition: var(--transition);
    }

    .choice-btn:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 25px rgba(0,0,0,0.15);
    }

    .choice-btn:hover img {
      transform: scale(1.1);
    }

    .choice-btn.disabled {
      opacity: 0.7;
      transform: none;
      box-shadow: var(--shadow);
      cursor: not-allowed;
    }

    /* Scoreboard Styles - Improved */
    .score-board {
      background: white;
      border-radius: 20px;
      padding: 1.5rem;
      width: 280px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-self: flex-start;
      order: 1;
      position: sticky;
      top: 20px;
    }

    .score-title {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #f0f0f0;
    }

    .score-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }

    .score-box {
      text-align: center;
      flex: 1;
    }

    .score-label {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      color: #777;
    }

    .score-value {
      font-size: 2.5rem;
      font-weight: 700;
    }

    .player-score {
      color: var(--primary-yellow);
    }

    .computer-score {
      color: var(--text-dark);
    }

    .vs-divider {
      font-size: 1.5rem;
      color: #aaa;
      margin: 0 0.5rem;
    }

    .result-message {
      text-align: center;
      font-size: 1rem;
      line-height: 1.4;
      min-height: 50px;
      padding: 0.75rem;
      margin: 0.5rem 0;
      background-color: #f9f9f9;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Streak Styles */
    .streak-container {
      margin: 0.5rem 0;
      text-align: center;
      padding: 0.75rem;
      background-color: #f9f9f9;
      border-radius: 10px;
    }

    .streak-label {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 0.5rem;
    }

    .streak-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .streak-flames {
      font-size: 1.5rem;
      transition: var(--transition);
    }

    .streak-flames.active {
      animation: flameJump 0.5s infinite alternate;
    }

    .streak-count {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-dark);
    }

    @keyframes flameJump {
      0% { transform: translateY(0); }
      100% { transform: translateY(-5px); }
    }

    /* Button Styles */
    .play-again-btn, .home-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .play-again-btn {
      background-color: var(--primary-yellow);
      color: var(--text-dark);
      padding: 0.75rem;
      font-size: 1rem;
      border: none;
      margin: 0.5rem 0;
    }

    .play-again-btn:hover {
      background-color: var(--dark-yellow);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .home-btn {
      border: 2px solid var(--primary-yellow);
      background: transparent;
      color: var(--text-dark);
      padding: 0.6rem;
      font-size: 0.9rem;
      text-decoration: none;
    }

    .home-btn:hover {
      background-color: var(--primary-yellow);
    }

    /* Win Animation */
    .win-highlight {
      position: relative;
      animation: winPulse 1.5s infinite;
    }

    @keyframes winPulse {
      0% { box-shadow: 0 0 0 0 rgba(255, 234, 0, 0.7); }
      70% { box-shadow: 0 0 0 15px rgba(255, 234, 0, 0);
      100% { box-shadow: 0 0 0 0 rgba(255, 234, 0, 0); }
    }

    /* Choice Animation */
    .animate-choice {
      animation: scaleChoice 0.5s forwards;
    }

    @keyframes scaleChoice {
      0% { transform: scale(0.8); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    /* Game Result Styles */
    .winner-text {
      color: var(--primary-yellow);
      font-weight: 700;
    }

    .loser-text {
      color: #ff5252;
      font-weight: 700;
    }

    .tie-text {
      color: #888;
      font-weight: 700;
    }

    /* Game Overlay Styles */
    .game-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    .game-overlay.fade-in {
      opacity: 1;
    }

    .game-result {
      background-color: white;
      border-radius: 20px;
      padding: 3rem;
      text-align: center;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
      transform: scale(0.9);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .game-result.pop-in {
      transform: scale(1);
      opacity: 1;
    }

    .result-icon {
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    .result-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .result-score {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #666;
    }

    .continue-btn {
      background-color: var(--primary-yellow);
      color: var(--text-dark);
      border: none;
      border-radius: 30px;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .continue-btn:hover {
      background-color: var(--dark-yellow);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .chosenChoices {
        flex-direction: column-reverse;
      }

      .vs-indicator {
        margin: -1rem 0;
        z-index: 5;
      }

      .choice-box {
        width: 100%;
      }

      .result-title {
        font-size: 2rem;
      }
    }
  `;
  document.head.appendChild(gameStyles);
});
