let xobox = document.getElementById("xobox");
let count = 0;
let turn = "X";
let op = document.getElementById("op");

let box = document.getElementsByClassName("box");

let cxo1 = 0;
let cxo2 = 0;
let cxo3 = 0;
let cxo4 = 0;
let cxo5 = 0;
let cxo6 = 0;
let cxo7 = 0;
let cxo8 = 0;
let cxo9 = 0;

let box0 = document.getElementsByClassName("box")[0];
let box1 = document.getElementsByClassName("box")[1];
let box2 = document.getElementsByClassName("box")[2];
let box3 = document.getElementsByClassName("box")[3];
let box4 = document.getElementsByClassName("box")[4];
let box5 = document.getElementsByClassName("box")[5];
let box6 = document.getElementsByClassName("box")[6];
let box7 = document.getElementsByClassName("box")[7];
let box8 = document.getElementsByClassName("box")[8];

let reset = document.getElementById("reset-btn");

let hidden = document.getElementById("hidden");


xobox.addEventListener("click" , () => {

    if(box0.innerHTML == box1.innerHTML && box0.innerHTML == box2.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box3.innerHTML == box4.innerHTML && box3.innerHTML == box5.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box6.innerHTML == box7.innerHTML && box6.innerHTML == box8.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box0.innerHTML == box3.innerHTML && box0.innerHTML == box6.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box0.innerHTML == box4.innerHTML && box0.innerHTML == box8.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(box2.innerHTML == box4.innerHTML && box2.innerHTML == box6.innerHTML){
        op.innerHTML = turn+" wins";
        hidden.style.zIndex = "100";
    }
    else if(count == 9){
        op.innerHTML = "Draw...!";
        hidden.style.zIndex = "100";
    }

    if(count%2 == 0){
        turn = "X";
    }
    else{
        turn = "O";
    }

})

box[0].addEventListener("click" , () => {
    if(cxo1 == 0){
    box[0].innerHTML = turn;
    cxo1++;
    count++;
}
})

box[1].addEventListener("click" , () => {
    if(cxo2 == 0){
        box[1].innerHTML = turn;
        cxo2++;
        count++;
    }
})

box[2].addEventListener("click" , () => {
    if(cxo3 == 0){
        box[2].innerHTML = turn;
        cxo3++;
        count++;
    }
})

box[3].addEventListener("click" , () => {
    if(cxo4 == 0){
        box[3].innerHTML = turn;
        cxo4++;
        count++;
    }
})

box[4].addEventListener("click" , () => {
    if(cxo5 == 0){
        box[4].innerHTML = turn;
        cxo5++;
        count++;
    }
})

box[5].addEventListener("click" , () => {
    if(cxo6 == 0){
        box[5].innerHTML = turn;
        cxo6++;
        count++;
    }
})

box[6].addEventListener("click" , () => {
    if(cxo7 == 0){
        box[6].innerHTML = turn;
        cxo7++;
        count++;        
    }
})

box[7].addEventListener("click" , () => {
    if(cxo8 == 0){
        box[7].innerHTML = turn;
        cxo8++;
        count++;
    }
})

box[8].addEventListener("click" , () => {
    if(cxo9 == 0){
        box[8].innerHTML = turn;
        cxo9++;
        count++;
    }
})

reset.addEventListener("click" , () => {
    box[0].innerHTML = "";
    box[1].innerHTML = " ";
    box[2].innerHTML = "  ";
    box[3].innerHTML = "   ";
    box[4].innerHTML = "    ";
    box[5].innerHTML = "     ";
    box[6].innerHTML = "      ";
    box[7].innerHTML = "       ";
    box[8].innerHTML = "        ";
    op.innerHTML = "";
    cxo1 = 0;
    cxo2 = 0;
    cxo3 = 0;
    cxo4 = 0;
    cxo5 = 0;
    cxo6 = 0;
    cxo7 = 0;
    cxo8 = 0;
    cxo9 = 0;
    count = 0;
    turn = "X";
    hidden.style.zIndex = "-100";
})