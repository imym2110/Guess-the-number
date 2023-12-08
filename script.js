'use strict';
// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'hi'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 13
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}
function gamePlay() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when no input
    if (!guess) {
        displayMessage('⛔ No Number')
    }

    // when player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
            localStorage.setItem('highscore', highScore);
        }
    }
    //when guess is not equal to secret number
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            displayMessage('💣 You lost the game')
            document.querySelector('.score').textContent = 0
        }
    }
}
document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        gamePlay()
    }
})

document.querySelector('.check').addEventListener('click', gamePlay)

let storedValue = localStorage.getItem('highscore')
if (storedValue !== null && storedValue !== undefined) {
    document.querySelector('.highscore').textContent = storedValue;
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})