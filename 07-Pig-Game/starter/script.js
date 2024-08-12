'use strict';

// Starting conditions
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;

const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
diceEl.classList.add('hidden');

// Random number generator
let randomNum = function() {
  return Math.floor(Math.random() * 6) + 1;
};

// Switch player function
const switchPlayer = function() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll dice button functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    let num = randomNum();
    let nextDice = 'dice-' + num + '.png';
    diceEl.src = nextDice;
    if (num !== 1) {
      currentScore += num;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold score button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// New game button functionality
btnNew.addEventListener('click', function() {
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  diceEl.classList.add('hidden');
  playing = true;
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});