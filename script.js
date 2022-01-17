var currentPlayer = "O";

function place(box){
    //If there is a letter in the box, it will not change
    if(box.innerText !="") return;
    //If the box is "current player", enter a different value
    box.innerText = currentPlayer;
    if(currentPlayer == "O"){
        currentPlayer = "X";
    }else{
        currentPlayer = "O";
    }
}