'use strict';
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
}

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore=0;
let activePlayer=0;
let scores=[0,0];

const init= function (){
 currentScore=0;
 activePlayer=0;
 scores=[0,0];
 score0El.textContent = 0;
 score1El.textContent = 0;
 current0El.textContent= 0;
 current1El.textContent= 0;

 diceEl.classList.add('hidden');
 playerEl0.classList.remove('player--winner');
 playerEl1.classList.remove('player--winner');
 playerEl0.classList.add('player--active');
 playerEl1.classList.remove('player--active');

 btnHold.disabled=false;
 btnRoll.disabled=false;
}

btnRoll.addEventListener('click', () => {
  
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }

});

btnHold.addEventListener('click', function (){
  
  scores[activePlayer] = currentScore + scores[activePlayer];
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  function winner (){
    if (scores[activePlayer]>= 20){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  
    diceEl.classList.add('hidden');
    btnHold.disabled=true;
    btnRoll.disabled=true;
  
    }
  }
  winner();
});

// resetting the game
btnNew.addEventListener('click', init);


