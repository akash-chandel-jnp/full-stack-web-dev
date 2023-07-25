// generating a random number for player 1 dice...
var rand1 = Math.floor(Math.random()*6)+1;
// console.log(rand1);

// based on this random number from 1 to 6 we have to display the corresponding dice image for player 1 using dom manipulation.

img1_src = "./images/dice" + rand1 + ".png"

var img1_src = document.querySelector(".img1").setAttribute("src",img1_src)


// generating a random number for player 2 dice...
var rand2 = Math.floor(Math.random()*6)+1;
// console.log(rand2);

// based on this random number from 1 to 6 we have to display the corresponding dice image for player 2 using dom manipulation.

img2_src = "./images/dice" + rand2 + ".png"

var img2_src = document.querySelector(".img2").setAttribute("src",img2_src)

// Decide who is the winner
var winner ;
if(rand1>rand2){
    winner=1;
}else if(rand2 > rand1){
    winner=2;
}else{
    winner=0; // draw
}


//  and declare on screen by changing refresh me text to player 1 / 2 won
var msg = document.querySelector("div h1")
if(winner==1){
    msg.innerHTML =  "&#128681 Player " + winner + " Won"

}else if(winner==2){
    msg.innerHTML =  "Player " + winner + " Won &#128681"

}else{
    msg.innerHTML = "Draw"

}

