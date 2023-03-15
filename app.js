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


// function stone() {
//   console.log("working")
//   document.getElementById("your").textContent = playerScore;
//   document.getElementById("dynamic").innerHTML= `
//   <div class="ka-iba-ibo">
//             <div><img class="ripple1" src="files/ripple.svg" alt=""></div>
//             <div class="player-move">
                
//                 <div class="picks">YOU PICKED</div>
                
//                 <img src="files/scissors-big.svg" alt="">
//             </div>
//             <div class="victory-text">
//                 <div class="you-win">YOU WIN</div>
//                 <div class="against-pc">AGAINST PC</div>
//                 <button type="submit" class="playagainBtn">PLAY AGAIN</button>
//             </div>
//             <div><img class="ripple2" src="files/ripple.svg" alt=""></div>
//             <div class="computer-move">
//                 <div class="picks">PC PICKED</div>
//                 <img src="files/yellow-big.svg" alt="">
//             </div>
//         </div>`;

// }


//LOGIC BEHIND ROCK-PAPER-SCISSORS

const moves = ['rock', 'paper', 'scissors'];

//intilal score count
let scoreYour = document.querySelector("#your");
let scoreComp = document.querySelector("#comp");

//fetch score of local storage
let playerScore = document.getElementById('your').innerHTML = localStorage.getItem("YOUR SCORE") || 0; 
let computerScore = document.getElementById('comp').innerHTML = localStorage.getItem("COMPUTER SCORE") || 0;


let rock = document.querySelector(".blue");
let paper = document.querySelector(".yellow");
let scissors = document.querySelector(".purple");


// ROCK
rock.addEventListener ("click", function() {
  
  gameplay(0); //0  is rock
  document.getElementById("dynamic").innerHTML= `
  <div class="ka-iba-ibo">
            <div><img class="ripple1" src="files/ripple.svg" alt=""></div>
            <div class="player-move">
                
                <div class="picks">YOU PICKED</div>
                
                <img src="files/blue-big.svg" alt="">
            </div>
            <div class="victory-text">
                <div class="you-win">YOU WIN</div>
                <div class="against-pc">AGAINST PC</div>
                <button type="submit" class="playagainBtn">PLAY AGAIN</button>
            </div>
            <div><img class="ripple2" src="files/ripple.svg" alt=""></div>
            <div class="computer-move">
                <div class="picks">PC PICKED</div>
                <img src="files/yellow-big.svg" alt="">
            </div>
        </div>`;
})

//PAPER
paper.addEventListener ("click", function() {
  const verdict = gameplay(1); //1 is paper
  if(verdict === 'tie'){
    document.getElementById("dynamic").innerHTML= `
    <div class="ka-iba-ibo">
              <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
              <div class="player-move">
                  
                  <div class="picks">YOU PICKED</div>
                  
                  <img src="files/yellow-big.svg" alt="">
              </div>
              <div class="victory-text">
                  <div class="you-win">YOU WIN</div>
                  <div class="against-pc">AGAINST PC</div>
                  <button type="submit" class="playagainBtn">PLAY AGAIN</button>
              </div>
              <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
              <div class="computer-move">
                  <div class="picks">PC PICKED</div>
                  <img src="files/yellow-big.svg" alt="">
              </div>
          </div>`;
          // document.getElementsByClassName("ripple1").style.opacity = 0;
  }
  // document.getElementById("dynamic").innerHTML= `
  // <div class="ka-iba-ibo">
  //           <div><img class="ripple1" src="files/ripple.svg" alt=""></div>
  //           <div class="player-move">
                
  //               <div class="picks">YOU PICKED</div>
                
  //               <img src="files/yellow-big.svg" alt="">
  //           </div>
  //           <div class="victory-text">
  //               <div class="you-win">YOU WIN</div>
  //               <div class="against-pc">AGAINST PC</div>
  //               <button type="submit" class="playagainBtn">PLAY AGAIN</button>
  //           </div>
  //           <div><img class="ripple2" src="files/ripple.svg" alt=""></div>
  //           <div class="computer-move">
  //               <div class="picks">PC PICKED</div>
  //               <img src="files/yellow-big.svg" alt="">
  //           </div>
  //       </div>`;
})

//SCISSORS
scissors.addEventListener ("click", function() {
  gameplay(2); //2 is scissors
  
  document.getElementById("dynamic").innerHTML= `
  <div class="ka-iba-ibo">
            <div><img class="ripple1" src="files/ripple.svg" alt=""></div>
            <div class="player-move">
                
                <div class="picks">YOU PICKED</div>
                
                <img src="files/scissors-big.svg" alt="">
            </div>
            <div class="victory-text">
                <div class="you-win">YOU WIN</div>
                <div class="against-pc">AGAINST PC</div>
                <button type="submit" class="playagainBtn">PLAY AGAIN</button>
            </div>
            <div><img class="ripple2" src="files/ripple.svg" alt=""></div>
            <div class="computer-move">
                <div class="picks">PC PICKED</div>
                <img src="files/yellow-big.svg" alt="">
            </div>
        </div>`;
})

//THE GAMEPLAY LOGIC
function gameplay(player_move) {

  let computer_move = Math.floor(Math.random() * moves.length);
  var nameofMove = moves[computer_move];
  console.log(nameofMove);

  //IF ITS A TIE
  if (player_move === computer_move) {
    return 'tie';
  } 

  //CONDITONS FOR PLAYER WIN
  else if ((player_move === 0 && computer_move === 2) || 
    (player_move === 1 && computer_move === 0) || 
    (player_move === 2 && computer_move === 1)) {

      playerScore++;
      scoreYour.textContent = `${playerScore}`; // your counter realtime update
      localStorage.setItem("YOUR SCORE", playerScore); //localstorage
      return 'user' ;

  //CONDITIONS FOR PLAYER LOSS
  } else {

    computerScore++;
    scoreComp.textContent = `${computerScore}`; //computer counter realtime update
    localStorage.setItem("COMPUTER SCORE", computerScore); //localstorage
    return 'computer';
  }
}