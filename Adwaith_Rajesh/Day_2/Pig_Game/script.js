'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// --------or--
// const score0 = document.getElementById('score--0');
// console.log(score0El.textContent);
// console.log(score1El.textContent);
let scores, currentScore, activePlayer, playing;
// Starting COnditions
const init = () => {
  currentScore = 0; //only availble in the function only
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner'); //We can tell javascript that even if it is not there
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnNew.classList.add('hidden');
  diceEl.classList.add('hidden');
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //To display current = 0 when dice =1;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0; //To make the current score 0 in variable.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}; //Here no parameter so no returning..Its just reusable piece of Code

const hidddenEl = () => {
  btnHold.classList.add('hidden');
  diceEl.classList.add('hidden');
  btnRoll.classList.add('hidden');
};
const invokeEl = () => {
  diceEl.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
};

// Rolling dice functionality

btnRoll.addEventListener('click', () => {
  if (playing) {
    // Generating a random DIceroll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //Chnagingbthe source of the image
    // Check for rolled 1 : if True switch to next player
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    //1.Add current score to the active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if player's score is >=100
    //Finish the game
  }
  if (scores[activePlayer] >= 100) {
    hidddenEl();
    btnNew.classList.remove('hidden');
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //3.Switch to the next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  invokeEl();
  init();
  btnNew.classList.add('hidden');
});
