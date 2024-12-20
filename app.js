/*-------------------------------- Constants --------------------------------*/
import{words} from "./randomwords.js"
/*---------------------------- Variables (state) ----------------------------*/
let randomtext = `${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]}`;
let currentPlayer = "One";
let timerEnd = null;
let timerStart = null;
let timerInterval = null;
let cursorPosition = 0;
/*------------------------ Cached Element References ------------------------*/
const players = document.querySelectorAll(".players");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const ElementWPM = document.querySelectorAll(".WPM");
const p1WPM = document.querySelector("#p1-wpm");
const p2WPM = document.querySelector("#p2-wpm");
const dlog = document.querySelectorAll(".dialogue");
const p1dlog = document.querySelector("#p1-dialogue");
const p2dlog = document.querySelector("#p2-dialogue");
const Time = document.querySelectorAll(".Time");
const p1Time = document.querySelector("#p1-time");
const p2Time = document.querySelector("#p2-time");
const statusText = document.querySelector(".status");
/*-------------------------------- Functions --------------------------------*/
StartGame();

function StartGame() {
    p1dlog.innerHTML = "";
    const letters = randomtext.split("").map((letter) => {
        const span = document.createElement("span");
        span.innerText = letter;
        p1dlog.appendChild(span);
        return span;});

        let firstLetter = letters[cursorPosition];
        if (firstLetter) firstLetter.classList.add("cursor");

    const keydown = ({ key }) => {
        if (!timerStart) {
        timerStart = new Date();
        timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - timerStart) / 1000);
        p1Time.innerText = `Time: ${elapsedTime}s`;
        
        if (elapsedTime >= 20) {
        endround("timeout", letters);}});}

        if (key === firstLetter.innerText) {
        firstLetter.classList.remove("cursor");
        firstLetter.classList.add("done");
        cursorPosition++;

        if (cursorPosition < letters.length) {
        firstLetter = letters[cursorPosition];
        firstLetter.classList.add("cursor");
        } else {
        endround("complete", letters);}}};

        document.addEventListener("keydown", keydown);

        const endround = (reason, letters) => {
        timerEnd = new Date();
        clearInterval(timerInterval);
        const elapsedTime = (timerEnd - timerStart) / 1000;
        let wordsamount = randomtext.split(" ").length;
        let WPS = wordsamount / elapsedTime;
        let WPM = WPS * 60;

        document.removeEventListener("keydown", keydown);

        if (reason === "complete") {
        statusText.innerText = "Round complete! Switching players...";
        } else if (reason === "timeout") {
        statusText.innerText = "Time's up. Switching players...";}

        if (currentPlayer === "One") {
        p1WPM.innerText = `WPM: ${Math.round(WPM)}`;
        setTimeout(() => ChangePlayer(), 3000);
        } else {
        p2WPM.innerText = `WPM: ${Math.round(WPM)}`;
        setTimeout(() => WinCondition(), 3000);}};}

function ChangePlayer() {
        if (currentPlayer === "One") {
        currentPlayer = "Two";
        p1.innerText = "Player 1";
        } else {
        currentPlayer = "One";
        p1.innerText = "Player 1";}

        p1dlog.innerHTML = "";
        cursorPosition = 0;
        timerStart = null;
        randomtext = `${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]}`;
        StartGame();}

function WinCondition() {
        const p1Score = parseInt(p1WPM.innerText.split(": ")[1], 10) || 0;
        const p2Score = parseInt(p2WPM.innerText.split(": ")[1], 10) || 0;

        if (p1Score > p2Score) {
        statusText.innerText = `Player 1 Wins! WPM: ${p1Score} vs ${p2Score}`;
        } else if (p2Score > p1Score) {
        statusText.innerText = `Player 2 Wins! WPM: ${p2Score} vs ${p1Score}`;
        } else {
        statusText.innerText = "Draw";}}