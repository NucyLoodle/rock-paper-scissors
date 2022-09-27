let playerScore = 0;
let computerScore = 0;

console.log(playerScore);
console.log(computerScore);

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')


function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random()*options.length);
    return options[choice];   
}

function score () {
  scores.innerHTML = `player: ${playerScore} | computer: ${computerScore}`; 
  container.appendChild(scores); 
}


function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    return 'You are reading each others minds! This game is a tie!';
  }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore ++;          
            return "You lose! Paper beats Rock.";
        } else {
            playerScore ++;
            return "Congratulations, you won!";
        }
  }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
          computerScore ++;
            return "You lose! Scissors beats Paper.";
        } else {
            playerScore ++;
            return "Congratulations, you won!";
        }
  }
  if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore ++;
            return "You lose! Rock beats Scissors.";
        } else {
            playerScore ++;
            return "Congratulations, you won!";
        }
  }
  else if (playerSelection !== 'paper' || 'rock' || 'scissors'){
      return; 
  }
  

}


const container = document.querySelector(".container");
const results = document.createElement('div');
results.classList.add('results');
const scores = document.createElement('div');
scores.classList.add('scores');

/*rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  results.textContent = ("The computer has chosen: " + computerSelection + ". " + playRound(playerSelection, computerSelection));

  console.log("The computer has chosen: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  ;
})*/

/*paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  results.textContent = ("The computer has chosen: " + computerSelection + ". " + playRound(playerSelection, computerSelection));
  console.log("The computer has chosen: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  
})*/

/*scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  results.textContent = ("The computer has chosen: " + computerSelection + ". " + playRound(playerSelection, computerSelection));
  console.log("The computer has chosen: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
})*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.className;
      const computerSelection = getComputerChoice();
      let roundResult =  playRound(playerSelection,computerSelection);
      results.textContent = `The computer has chosen: ${computerSelection}. ${roundResult}`;
      //console.log("The player choice is" + playerSelection)
      //console.log("The computerChoice is" + getComputerChoice());
      //console.log("The computerSelection is" + computerSelection);
      score();
      gameEnd();
      console.log(roundResult);
      container.appendChild(results)
      
    })
})

  function gameEnd() {
    if(playerScore === 5 || computerScore === 5) {
        document.querySelector('.rock').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.scissors').disabled = true;
        if (playerScore > computerScore) {
            results.textContent = `Congratulations! You are the winner!`;
        } else if (computerScore > playerScore) {
          results.textContent = `The computer wins :(`;
        }
    }
}