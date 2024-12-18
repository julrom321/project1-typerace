/*-------------------------------- Constants --------------------------------*/
import{words} from "./randomwords.js"
/*---------------------------- Variables (state) ----------------------------*/
let rnum = Math.floor(Math.random() * 2000) + 1;
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
const inputtype = document.querySelectorAll(".inputtype")
const p1type = document.querySelector("#p1-type")
const p2type = document.querySelector("#p2-type")
/*-------------------------------- Functions --------------------------------*/
function RandomDlog(){
    p1dlog.textContent = `${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]}`
    p2dlog.textContent = `${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]} ${words[Math.floor(Math.random() * 2000) + 1]}`
}
RandomDlog(); // function will get called when start button is pressed. but for testing purposes im leaving this on
function CheckSpelling(){

}
function CountWPM(){

}
function StartGame(){

}
function ChangePlayer(){

}
function WinCondition(){

}
/*----------------------------- Event Listeners -----------------------------*/
