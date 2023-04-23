// Selecting All "Starting Page" Tags
var base = document.querySelector("#base");
var choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
var playPage = document.querySelector("#playPage");
var showChange = document.querySelector("#showChange");
var square = document.querySelectorAll(".square");

// Selecting All "Winner Page" Tags
var winner = document.querySelector("#winner");
var winnerName = document.querySelector("#winnerName");
var quit = document.querySelector("#quit");

// How Can We Change Turns
// False => X's Turn
//True => O's Turn
var changeTurn = null;

// Select Which You Want To Be>
// X or O

for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener("click", function aa() {
        if (choose[i].id === "playerX") {
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = `160px`;
        }
        base.style.display = "none";
        playPage.style.display = "block";
    });
}


for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function a() {
        // Add "X" Icon If "ChangeTurn" = False
        // Add "O" Icon If "ChangeTurn" = True
        if (changeTurn == false) {
            square[i].textContent = "X";
            square[i].id = "X";
            square[i].style.pointerEvents = "none";
            showChange.style.left = `160px`;

            // change The "changeTurn" Value False Into True
            changeTurn = true;
        } else {
            square[i].textContent = `O`;
            square[i].id = "O";
            square[i].style.pointerEvents = "none";
            showChange.style.left = `0px`;

            // change The "changeTurn" Value False Into True
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    });
}

// All Possible Winning Combinations
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function winningFunc() {
    for (var a = 0; a <= 7; a++) {
        var b = winningCombinations[a];
        // console.log(b);

        if (square[b[0]].id == "" || square[b[1]].id == "" || square[b[2]].id == "") {
            continue;
        } else if (square[b[0]].id == "X" && square[b[1]].id == "X" && square[b[2]].id == "X") {
            // console.log("X is The Winner");

            // Adding Winner text
            winnerName.textContent = `Player X Win The Game!`;

            // show "Winner Page" & Hide "play Page"
            playPage.style.display = "none";
            winner.style.display = "block";
        } else if (square[b[0]].id == "O" && square[b[1]].id == "O" && square[b[2]].id == "O") {
            // console.log("O is The Winner");

            // Adding Winner text
            winnerName.textContent = `Player O Win The Game!`;

            // show "Winner Page" & Hide "play Page"
            playPage.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}

// Match Draw Function
function drawFunc()
    
 {
    if (square[0].id != "" && square[1].id != "" &&
        square[2].id != "" && square[3].id != "" &&
        square[4].id != "" && square[5].id != "" &&
        square[6].id != "" && square[7].id != "" && square[8].id != "") {
        // Adding "Draw" text
        winnerName.textContent = `Match Draw!`;

        // show "Winner Page" & Hide "play Page"
        playPage.style.display = "none";
        winner.style.display = "block";
    }
}

// Reset Game
quit.addEventListener("click", () => {
    base.style.display = "block";
    playPage.style.display = "none";
    winner.style.display = "none";
    square.forEach(item => {
        item.textContent = "";
        item.id = "";
        item.style.pointerEvents = "auto";
    });
    showChange.style.left = `0px`;
    changeTurn = null;
});