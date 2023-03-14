//CODE TO HIDE AND DISPLAY THE RULES

const hideButton = document.getElementById('clicktohide');
const elementToHide = document.getElementById('hidethis');
const rulesButton = document.getElementById('ruleshere')

hideButton.addEventListener('click', function () {
  elementToHide.style.display = 'none';
});

rulesButton.addEventListener('click', function () {
  elementToHide.style.display = 'block';
});

// function stone(player_move) {
//   console.log(player_move)
//   document.getElementById("dynamic").innerHTML = "<p>Hello</p>";

// }


//LOGIC BEHIND ROCK-PAPER-SCISSORS

const moves = ['rock', 'paper', 'scissors'];
//intilal score count
let playerScore = document.getElementById('your').innerHTML = localStorage.getItem("YOUR SCORE");
let computerScore = document.getElementById('comp').innerHTML = localStorage.getItem("COMPUTER SCORE");





let rock = document.querySelector(".blue");
let paper = document.querySelector(".yellow");
let scissors = document.querySelector(".purple");

rock.addEventListener ("click", function() {
  gameplay(0); //0  is rock
  console.log("rock");
})

paper.addEventListener ("click", function() {
  gameplay(1); //1 is paper
  console.log("paper");
})

scissors.addEventListener ("click", function() {
  gameplay(2); //2 is scissors
  console.log("scissors");
})

//THE GAMEPLAY LOGIC
function gameplay(player_move) {

  let computer_move = Math.floor(Math.random() * moves.length);
  let nameofMove = moves[computer_move];
  console.log(nameofMove);

  //IF ITS A TIE
  if (player_move === computer_move) {
    console.log('tie');
  } 

  //CONDITONS FOR PLAYER WIN
  else if ((player_move === 0 && computer_move === 2) || 
    (player_move === 1 && computer_move === 0) || 
    (player_move === 2 && computer_move === 1)) {

      playerScore++;
      localStorage.setItem("YOUR SCORE", playerScore); //localstorage
      console.log('player wins');

  //CONDITIONS FOR PLAYER LOSS
  } else {

    computerScore++;
    localStorage.setItem("COMPUTER SCORE", computerScore); //localstorage
    console.log('player loses');
  }
}