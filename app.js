/*exported startGame, guessLetter*/
'use strict';
// function Game(word, guess, progress, numGuesses) {
//     this.randomWord = word;
//     this.userGuess = guess;
//     this.userProgress = progress;
//     this.numGuesses = numGuesses;
// }

// function newGame() {
//     var newGame = new Game('random word', 'k', '______ ____', 6);
//     console.log(newGame);
// }

// function checker() {
//     console.log(newGame.randomWord);
//     console.log(newGame.userGuess);
//     console.log(newGame.userProgress);
//     console.log(newGame.numGuesses);
// }

//GLOBAL VARIABLES because I don't understand how to have multiple functions understand the same persistent variable
var solution;
var userProgress;
var userView = document.getElementById('user-view');
var guess;
var guessNumber = 6;
var guessedLetters;
var response = document.getElementById('game-response');

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getWord(wordList) {
    var index = randomInt(wordList.length);
    return wordList[index];
}

function gameReset() {
    console.log('game reset');
}

function convertWordToUnderscores(word) {
    var underscoredWord = '';
    for(var i = 0; i < word.length; i++) {
        underscoredWord += '_';
    }
    return underscoredWord;
}

function startGame() {
    gameReset();
    solution = getWord(word);
    console.log(solution);
    userProgress = convertWordToUnderscores(solution);
    userView.textContent = userProgress.split('').join(' ');
}

function duplicateLetter(guess) {
    console.log('duplicate', guess);
    response.textContent = 'You\'ve already guessed that correctLetter.';
}
function correctLetter(guess) {
    console.log('correct', guess);
    guessedLetters += guess;
}
function incorrectLetter(guess) {
    console.log('incorrect', guess);
    guessedLetters += guess;
}


function guessLetter() {
    guess = document.getElementById('guess').value;
    if(guessedLetters.includes(guess) === true) {
        duplicateLetter(guess);
    }
    else if(solution.includes(guess) === true) {
        correctLetter(guess);
    }
    else {
        incorrectLetter(guess);
    }
}