const computer = document.getElementById('computer')
const user = document.getElementById('user')
const result = document.getElementById('result')
const poss = document.querySelectorAll('button')
let uchoice
let cchoice
let resul

poss.forEach((poss) => poss.addEventListener('click', (e) => {
  uchoice = e.target.id
  user.innerText = uchoice

  function generatecomputerchoice() {
    const random = Math.floor(Math.random() * 3) + 1

    if (random === 1) {
      cchoice = 'rock'
    }
    if (random === 2) {
      cchoice = 'paper'
    }
    if (random === 3) {
      cchoice = 'scissors'
    }
    computer.innerText = cchoice
  }

  generatecomputerchoice()

  function result1() {
    if (cchoice === uchoice) {
      resul = 'its a draw!'
      result.classList.remove('win', 'lose')
      result.classList.add('draw')
    }
    if (cchoice === 'rock' && uchoice === 'scissors') {
      resul = 'you lose'
      result.classList.remove('win', 'draw')
      result.classList.add('lose')
    }
    if (cchoice === 'rock' && uchoice === 'paper') {
      resul = 'you win'
      result.classList.remove('lose', 'draw')
      result.classList.add('win')
    }
    if (cchoice === 'paper' && uchoice === 'scissors') {
      resul = 'you win'
      result.classList.remove('lose', 'draw')
      result.classList.add('win')
    }
    if (cchoice === 'paper' && uchoice === 'rock') {
      resul = 'you lose'
      result.classList.remove('win', 'draw')
      result.classList.add('lose')
    }
    if (cchoice === 'scissors' && uchoice === 'paper') {
      resul = 'you lose'
      result.classList.remove('win', 'draw')
      result.classList.add('lose')
    }
    if (cchoice === 'scissors' && uchoice === 'rock') {
      resul = 'you win'
      result.classList.remove('lose', 'draw')
      result.classList.add('win')
    }
    result.innerText = resul
  }

  result1()
}))
