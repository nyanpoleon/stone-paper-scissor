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

let rock = document.querySelector(".blue");
let paper = document.querySelector(".yellow");
let scissors = document.querySelector(".purple");

rock.addEventListener ("click", function() {
  gameplay(0);
  console.log("rock");
})

paper.addEventListener ("click", function() {
  gameplay(1);
  console.log("paper");
})

scissors.addEventListener ("click", function() {
  gamerplay(2);
  console.log("scissors");
})

function gameplay(player_move) {

  let computer_move = Math.floor(Math.random() * moves.length);
  console.log(computer_move);
  
  if (player_move === computer_move) {
    console.log('tie');
  } 
  
  else if ((player_move === 'stone' && computer_move === 'scissors') || 
    (player_move === 'paper' && computer_move === 'stone') || 
    (player_move === 'scissors' && computer_move === 'paper')) {

      console.log('player wins');
  } else {
    console.log('player loses');
  }
}