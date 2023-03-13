'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Corrrect Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20; //Also called a state variable because it is a part of the application state which is basically all the data relavant to the application

//To select the button we wanted
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //This will be a string and we will need to change it

  if (!guess) {
    //logic: here other than numbers(eg:+,-,/ etc..) guess will hold a value 0 and it is of number type..And 0 is a false value ..So we are converting it into true value for executing if statement.And the input field only only accepts numbers.
    document.querySelector('.message').textContent = 'No Number 😈';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    //whenever we are manipulating a string we need to specify it in string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your Guess is too High 📈';
      score--; //score = score -1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤯';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your Guess is too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤯';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = null;
  document.querySelector('.number').style.width = null;
});

//What happened here : First we selected the button here using the query selector and then we used the addEventListener method on that method to attch the event handler(That event handler is the anonymous function); Here the function is the argumen to the eventHandler method
