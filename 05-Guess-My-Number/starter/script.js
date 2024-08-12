'use strict';

let number = Math.trunc(Math.random() * 20)+1;
let score = 20;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
// When no guess.
if (!guess) {
    displayMessage("No guess!");
} else if (guess !== number) {
    if (score > 1) {
        displayMessage(guess > number ? "Too high": "Too low");
        score --;
        document.querySelector('.score').textContent = score;
        } else {
        displayMessage("You lost the game 😭");
        document.querySelector('.score').textContent = 0;
    }

// When guess is right.
} else if (guess === number) {
    displayMessage("🎉 Correct Number");
    let highScore = Number(document.querySelector('.highscore').textContent);
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.backgroundColor = 'white';
    document.querySelector('.guess').style.color = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#60b347';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
});

// again button handler 

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').style.backgroundColor = 'white';
    document.querySelector('.guess').style.color = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.color = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; // Reset guess input field
});






















