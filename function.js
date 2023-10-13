const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')

const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loOrHi = document.getElementById('lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

function validGuess(number){
    if(isNaN(number)){
        alert('Please enter a valid number')
    }
    else if(number < 1){
        alert('Please enter More than 0')
    }
    else if(number > 100){
        alert('Please enter Less than 100')
    }
    else{
        prevGuess.push(number)
        if(numGuess === 11){
            displayGuess(number)
            displayMessage(`Game Over random number was ${number}`)
            endGame()
        }
        else{
            displayGuess(number)
            checkGuess(number)
        }
    }
}
function checkGuess(number){
    if(number === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(number > randomNumber){
        displayMessage(`Your guessed is High`)
    }
    else if(number < randomNumber){
        displayMessage(`Your guessed is Low`)
    }
}
function displayGuess(number){
    userInput.value = ''
    guessSlot.innerHTML += `${number} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}



function displayMessage(message){
    loOrHi.innerHTML = `<h2> ${message} </h2>` 
}

function newGame(){
    const newGame = document.querySelector('#NewGame')
    newGame.addEventListener('clcik',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable','')
        startOver.removeChild(p)
        playGame = true
    })
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="NewGame">New Game</h2>`
    startOver.append(p)
    playGame = false
    newGame()
}

if(playGame == true){
    submit.addEventListener('click',function(e)
    {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validGuess(guess)
    })
}