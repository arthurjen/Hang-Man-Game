/*exported startGame, guessLetter*/
'use strict';

//GLOBAL VARIABLES because I don't understand how to have multiple functions understand the same persistent variable
var solution;
var userProgress = [];
var userView = document.getElementById('user-view');
var guess;
var guessNumber = 6;
var guessedLetters = '';
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

function startGame() {
    gameReset();
    solution = getWord(word);
    console.log(solution);
    userProgress = convertWordToUnderscores(solution);
    console.log(userProgress);
    printGame();
}

function duplicateLetter(guess) {
    console.log('duplicate', guess);
    response.textContent = 'You\'ve already guessed that letter.';
}

function correctLetter(guess) {
    console.log('correct', guess);
    for(var i = 0; i < solution.length; i++){
        if(solution[i] === guess) {
            userProgress[i] = guess;
        }
    }
    printGame();
    guessedLetters += guess;
}

function incorrectLetter(guess) {
    console.log('incorrect', guess);
    if(guessNumber === 0) {
        response.textContent = 'You died.';
    }
    else {
        guessNumber--;
        console.log(guessNumber);
        guessedLetters += guess;
    }
}


function guessLetter() {
    guess = document.getElementById('input').value;
    document.getElementById('input').value = '';
    response.textContent = '';
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