let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreboardDiv = document.querySelector(".scoreboard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
//const music = document.getElementById("myAudio");

function playMusic(){
    console.log("Nesto!");
    document.addEventListener("click",function(){
        document.getElementById("myAudio").play();
        document.getElementById("myAudio").muted=false;
    })

    
}

function getComputerChoice(){
    const choices =["r","p","s"];
    const computerChoice =  choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function convertToWord(letter){
    if(letter ==="r") return "KAMEN";
    if(letter ==="p") return "LIST";
    if(letter ==="s") return "MAKAZE";
}

function userWin(userChoice,computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = "[VI] " + convertToWord(userChoice) + " vs [BOT] " + convertToWord(computerChoice) + " ---> " + "VI STE POBJEDNIK!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("green-glow");
    },500);
}

function computerWin(userChoice,computerChoice){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
    resultP.innerHTML = "[BOT] " + convertToWord(computerChoice) + " vs [USER] " + convertToWord(userChoice) + " ---> " + "BOT JE POBJEDNIK!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("red-glow");
    },500);
}

function draw(userChoice,computerChoice){
    resultP.innerHTML = "[USER] " + convertToWord(userChoice) + " vs [BOT] " + convertToWord(computerChoice) + " ---> " + "NERJEŠENO JE!";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("gray-glow");
    },500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    if(userChoice =="r"){
        if(computerChoice =="r"){
            //console.log("IT IS DRAW!");
            draw(userChoice,computerChoice);
        }
        else if(computerChoice=="p"){
            //console.log("COMPUTER WIN!");
            computerWin(userChoice,computerChoice);
        }
        else if(computerChoice=="s"){
            //console.log("YOU WIN!");
            userWin(userChoice,computerChoice);
        }
    }
    if(userChoice =="p"){
        if(computerChoice =="p"){
            //console.log("IT IS DRAW!");
            draw(userChoice,computerChoice);
        }
        else if(computerChoice=="s"){
            //console.log("COMPUTER WIN!");
            computerWin(userChoice,computerChoice);
        }
        else if(computerChoice=="r"){
            //console.log("YOU WIN!");
            userWin(userChoice,computerChoice);
        }
    }
    if(userChoice =="s"){
        if(computerChoice =="s"){
            //console.log("IT IS DRAW!");
            draw(userChoice,computerChoice);
        }
        else if(computerChoice=="r"){
            //console.log("COMPUTER WIN!");
            computerWin(userChoice,computerChoice);
        }
        else if(computerChoice=="p"){
            //console.log("YOU WIN!");
            userWin(userChoice,computerChoice);
        }
    }
}

function main() {
    playMusic();
    rockDiv.addEventListener("click", function () {
        game("r");
    });

    paperDiv.addEventListener("click", function () {
        game("p");
    });

    scissorsDiv.addEventListener("click", function () {
        game("s");
    });
}

main();
