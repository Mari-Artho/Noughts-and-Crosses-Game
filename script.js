var currentPlayer = "O";

function place(box){
    //If there is a letter in the box, it will not change
    if(box.innerText !="") return;
    //If the box is "current player", enter a different value
    box.innerText = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
}

function checkGameBoard(){
    var first = document.getElementById("0_0").innerText;
    var second = document.getElementById("1_0").innerText;
    var third = document.getElementById("2_0").innerText;
    if(first == "") return;
        if(first==second && first == third){
            alert("You win!");
        }
}