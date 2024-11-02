var randomInteger1 = Math.floor(Math.random() * 6) + 1; 

var randomdicedisplay1 = "images/dice" + randomInteger1 + ".png";

var image1 = document.querySelectorAll("img")[1];
 
image1.setAttribute("src", randomdicedisplay1);



var randomInteger2 = Math.floor(Math.random() * 6) + 1; 

var randomdicedisplay2 = "images/dice" + randomInteger2 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomdicedisplay2);


if(randomInteger1 > randomInteger2) {
    document.querySelector("h1").innerHTML = "Player 1 win!";
} else if(randomInteger1 < randomInteger2) {
    document.querySelector("h1").innerHTML = "Player 2 win!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}