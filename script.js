'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// Guess My Number

// Generate a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set initial score
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Begin click event listener block for 'Check!' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number! ⛔');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong (Using a ternary operator)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
    } else {
      displayMessage('You lost the game!');
    }
    document.querySelector('.score').textContent = score;
  }

  /*     // When guess is too high
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    document.querySelector('.score').textContent = score;

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    document.querySelector('.score').textContent = score;
  } */
});

// Begin click event listener block for 'Again!' button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  score = 20;

  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
