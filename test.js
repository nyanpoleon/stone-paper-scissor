// RANDOMIZING COMPUER PICKS

const moves = ['rock', 'paper', 'scissors'];

function computerPicks() {
    let randomPick = Math.floor(Math.random() * moves.length);
    let compChoice = moves[randomPick];
    
    return compChoice;
}

function gameplay() {

}

const computer_move = computerPicks();

function gamerplay(computer_move, player_move) {
    if (player_move === computer_move) {
      return "tie";
    }
  
    else if ((player_move === 'stone' && computer_move === 'scissors') || 
      (player_move === 'paper' && computer_move === 'stone') || 
      (player_move === 'scissors' && computer_move === 'paper')) {
        return "player win"
      }
    else {
      return "player lose";
    }
  }
  