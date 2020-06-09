//For image 1
alert("READ TO PLAY?");
var randomNumber1=Math.floor( Math.random()*6) + 1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//For image 2

var randomNumber2=Math.floor( Math.random()*6 ) + 1;
var randomDiceImageSource2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);

//Scores
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
