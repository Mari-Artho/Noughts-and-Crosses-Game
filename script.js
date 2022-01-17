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
    //Horizontal
   for(var i=0; i<=2; i++){
    // var first = document.getElementById("0_" +i).innerText;
    // var second = document.getElementById("1_" +i).innerText;
    // var third = document.getElementById("2_" +i).innerText;
    //checkWinner(first,second,third);
    checkWinner(document.getElementById("0_" +i).innerText,document.getElementById("1_" +i).innerText, document.getElementById("2_" +i).innerText)
    } 

    //Vertical
    for(var i=0; i<=2; i++){
    checkWinner(document.getElementById( i+ "_0").innerText,document.getElementById(i+ "_1").innerText,document.getElementById(i+ "_2").innerText);
    }

    //Diagonal-1
    checkWinner(document.getElementById("0_0").innerText,document.getElementById("1_1").innerText,document.getElementById("2_2").innerText);

    //Diagonal-2
    checkWinner(document.getElementById("0_2").innerText,document.getElementById("1_1").innerText,document.getElementById("2_0").innerText);
}

function checkWinner(first,second,third){
    if(first != "" && first==second && first==third){
        alert("You are amazing!");
    }
}