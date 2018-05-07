/*exported startGame, guessLetter*/
'use strict';

//GLOBAL VARIABLES because I don't understand how to have multiple functions understand the same persistent variable
var solution;
var userProgress = [];
var userView = document.getElementById('user-view');
var guess;
var guessNumber = 6;
var guessedLetters = '';
var displayGuesses = document.getElementById('display-guesses');
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
    solution = '';
    userProgress = [];
    userView.textContent = '';
    guessNumber = 6;
    guessedLetters = '';
    response.textContent = '';
    document.getElementById('input').value = '';
    document.getElementById('guess-button').disabled = false;
}

function printGame() {
    userView.textContent = userProgress.join(' ');
}

function convertWordToUnderscores(word) {
    var underscoredWord = '';
    for(var i = 0; i < word.length; i++) {
        underscoredWord += '_';
    }
    return underscoredWord.split('');
}
function updateGuessedLetters() {
    guessedLetters += guess;
    displayGuesses.textContent = guessedLetters.split('').join(' ');
}

function startGame() {
    gameReset();
    solution = getWord(word);
    userProgress = convertWordToUnderscores(solution);

    printGame();
    for(var i = 1; i < 6; i++) {
        document.getElementById('shark-' + i).style.visibility = 'hidden';
    }
    document.getElementById('shark-6').style.visibility = 'visible';
}

function correctLetter(guess) {
    for(var i = 0; i < solution.length; i++){
        if(solution[i] === guess) {
            userProgress[i] = guess;
        }
    }
    printGame();
    updateGuessedLetters();
}

function incorrectLetter() {
    if(guessNumber === 1) {
        updateGuessedLetters();
        response.textContent = 'GAME OVER';
        document.getElementById('guess-button').disabled = true;
        for(var i = 1; i < 7; i++) {
            document.getElementById('shark-' + i).style.visibility = 'hidden';
        }
    }
    else {
        guessNumber--;
        document.getElementById('shark-' + guessNumber).style.visibility = 'visible';
        updateGuessedLetters();
    }
}


function guessLetter() {
    guess = document.getElementById('input').value;
    guess = guess.toLowerCase();
    document.getElementById('input').value = '';
    response.textContent = '';
    if(guess === '') {
        response.textContent = 'Enter a letter.';
    }
    else if(guessedLetters.includes(guess) === true) {
        response.textContent = 'You\'ve already guessed that letter.';
    }
    else if(solution.includes(guess) === true) {
        correctLetter(guess);
    }
    else {
        incorrectLetter();
    }
}