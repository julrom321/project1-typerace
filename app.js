/*-------------------------------- Constants --------------------------------*/
import{words} from "./randomwords.js"
/*---------------------------- Variables (state) ----------------------------*/
let randomtext = `${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]}`
let currentPlayer = "Player-1";
let turn = null;
let cursorPosition = 0;
/*------------------------ Cached Element References ------------------------*/
const players = document.querySelectorAll(".players")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const WPM = document.querySelectorAll(".WPM")
const p1WPM = document.querySelector("#p1-wpm")
const p2WPM = document.querySelector("#p2-wpm")
const dlog = document.querySelectorAll(".dialogue")
const p1dlog = document.querySelector("#p1-dialogue")
const p2dlog = document.querySelector("#p2-dialogue")
/*-------------------------------- Functions --------------------------------*/
function CheckSpelling(){
    
}
CheckSpelling() // function will be called when 
function CountWPM(){

}
function StartGame(){

}
function ChangePlayer(){

}
function WinCondition(){

}
/*----------------------------- Event Listeners -----------------------------*/
    const letters = randomtext.split("").map((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    p1dlog.appendChild(span); // p1dlog will be assigned to  its current player later, but for testing purposes its p1
    return span;});
    
    let firstLetter = letters[0];
    firstLetter.classList.add("cursor");
    
    document.addEventListener("keydown", ({key}) => {
        if (key === firstLetter.innerText) {
        firstLetter.classList.remove("cursor");
        firstLetter.classList.add("done");
        firstLetter = letters[++cursorPosition]
        }})
/*------------------------------- Grave yard --------------------------------*/
// const inputtype = document.querySelectorAll(".inputtype")
// const p1type = document.querySelector("#p1-type")
// const p2type = document.querySelector("#p2-type")
// // function RandomDlog(){} // function will get called when start button is pressed. but for testing purposes its on
