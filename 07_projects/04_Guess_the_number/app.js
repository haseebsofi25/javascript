let randomNumber = parseInt(Math.random() * 100 + 1);  //? ParseInt => removes the decimal

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi') 
const startOver = document.querySelector('.resultParas')

const p =document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value) //? Holds the value as an integer in a variable guess
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //? Validates the guess. Checks the guess is valid or not

    if(isNaN(guess)) {
        alert('Please enter a valid number!')
    }else if(guess < 1) {
        alert('Please enter a number more than 1!')
    }else if(guess > 100) {
        alert('Please enter a number less than 100!')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //? Gives the msg after checks the guess.

    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if( guess < randomNumber){
        displayMessage(`Number is TOOOOO low`)
    }else if( guess > randomNumber){
        displayMessage(`Number is TOOOOO high`)
    }

}

function displayGuess(guess) {
    //? Cleans the value, updates the guesses and arrays.

    userInput.value = ''
    guessSlot.innerHTML +=`${guess}, ` //? Pushes the guess value
    numGuess++; //? Keeps updating the value
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    //? Interatct with DOM. Pass the value and gives the msg in return nand reduces the guess remaining number

    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //? Ends game
    userInput.value = '' //? Clears the value
    userInput.setAttribute('disabled', '') //? Stops the user from adding more values
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    //? Starts a new game

    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1); 
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
