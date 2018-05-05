'use strict';

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
    var solution = getWord(word);
    console.log(solution);
    for(var i = 0; i < word.length; i++) {
        userProgress += '_';
    }
    var userProgress = convertWordToUnderscores(solution);
    console.log(userView.split('').join(' '));
    var userView = document.getElementById('user-view');
}