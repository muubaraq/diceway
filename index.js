// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const tossBtn = document.getElementById("tossBtn")
const dices = [" ", "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
    
tossBtn.addEventListener("click", function() {
    function toss() {
       const toss1 = Math.floor(Math.random() * 6) + 1
          dices[toss1]
      player1Dice.innerHTML = `<img class="dice-img" src="images/${dices[toss1]}">`
      const toss2 = Math.floor(Math.random() * 6) + 1
      player2Dice.innerHTML = `<img class="dice-img" src="images/${dices[toss2]}">`
      if (toss1 > toss2) {
          message.textContent = "player 1 Start"
      } else if (toss1 === toss2){
          message.textContent = "ReToss"
          toss()
      }else {
          message.textContent = "player 2 Start"
      }
      if (toss1 > toss2) {
        player1Turn === true
        player1Dice.classList.add("active")
    }else {
        player1Turn = false
        player2Dice.classList.add("active")
    }
    }
        toss()
        tossBtn.style.display = "none"
        rollBtn.style.display = "block"
})

function showResetButton() {
     rollBtn.style.display = "none"
     resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
          dices[randomNumber]
    
    

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.innerHTML = `<img class="dice-img" src="images/${dices[randomNumber]}">`
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.innerHTML = `<img class="dice-img" src="images/${dices[randomNumber]}">`
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.innerHTML = `<img class="animation" src="https://media3.giphy.com/media/Ca0NP6r1SUp101dSWB/200w.webp?cid=ecf05e47vyjh95gdaqnmnyi8p3csylozm589j5vvpvbiljr8&rid=200w.webp&ct=g"><p class="declare">Player 1 Won</p>`
        showResetButton()
    }  else if (player2Score >= 20) {
        message.innerHTML = `<img class="animation" src="https://media4.giphy.com/media/jTlKGJBGQc4FwFEmgj/200w.webp?cid=ecf05e4744u22xsuwbm29jmdh3595bh2908nccy8qd93t5jm&rid=200w.webp&ct=g"><b> <p class="declare">Player 2 Won</p> `
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    message.textContent = "Toss Game"
    tossBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.remove("active")
    
}
