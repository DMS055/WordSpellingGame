let timer = document.getElementsByClassName("timer-div")[0];
let streak = document.querySelector(".streak-div");
let quizContainer = document.getElementById("container");
let displayContainer = document.getElementById("display-container");
let userRes = document.getElementById("user-res");
let startScreen = document.querySelector(".start-screen");
let startBtn = document.getElementById("start-btn");
let questionCount;
let countdown;
let score = 0;
let count = 0;


import { correctWords, incorrectWords, randomValue } from "/scripts/words.js";
let wordArray = [];

const displayNext = () => {
    questionCount += 1;
    create();
}

const timerDisplay = () => {
    countdown = setInterval(() => {
        timer.innerHTML = "Time: " + count + "s";
        count++;
    }, 1000);
}

const generateQuestion = () => {
    let rand = Math.random() >= 0.5 ? 1 : 0;

    let arrayChoice = rand ? correctWords : incorrectWords;
    let valueChoice = randomValue(arrayChoice);
    
    if (wordArray.includes(valueChoice)) {
        generateQuestion();
    } else {
        wordArray.push(valueChoice);
    }
}

function create() {}
