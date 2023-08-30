let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let intervalId;
let isAutoPlaying = false;

const autoPlayElement = document.querySelector('.js-auto-button');
const rockElement = document.querySelector('.js-rock-button');

rockElement.addEventListener('click', () => {
  playGame('rock');
});

autoPlayElement.addEventListener('click', () => {
  autoPlay();
});





function autoPlay() {
  if (isAutoPlaying === false) {
    autoPlayElement.innerText = 'Stop autoplay';
    intervalId = setInterval(() => {
      const player = pickComputerMove();
      playGame(player);
      isAutoPlaying = true;
    }, 3000);
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayElement.innerText = 'Auto play'
  }
}  

function playGame(playerMove) {
  
  const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'rock') {

  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win!';
  }
}

if (playerMove === 'paper') {

  if (computerMove === 'rock') {
    result = 'You win!';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
}


if (playerMove === 'scissors') {

  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win!';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
}

if (result === 'You win!') {
  score.wins += 1;
} else if (result === 'You lose.') {
  score.losses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement(); 

document.querySelector('.js-moves')
  .innerHTML = `You picked ${playerMove}, computer picked ${computerMove}.`;

document.querySelector('.js-result')
  .innerHTML = result;

}

function updateScoreElement() {

  document.querySelector('.js-score')
    .innerHTML 
      = `Wins: ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;

}

function pickComputerMove() {

  let computerMove = '';

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;

}