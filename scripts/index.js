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

displayNext = () => {
    questionCount += 1;
    create();
}