// var randomnumber1=Math.random(0-6);
// randomnumber1=Math.random();
// randomnumber1=randomnumber1*6;
// randomnumber1=Math.floor(randomnumber1);
// randomnumber1=randomnumber1+1;
// //console.log(randomnumber1);
// var randomDiceImage="dice"+randomnumber1+".png";
// var randomImageSource="images/"+randomDiceImage;
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImageSource);

// var randomnumber2=Math.random()*6;
// randomnumber2=Math.floor(randomnumber2)+1;
// //console.log(randomnumber2);

// var randomImageSource2="images/dice"+randomnumber2+".png";
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImageSource2);


// if(randomnumber1 > randomnumber2)
// {
//     document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
// }
//  else if(randomnumber1 < randomnumber2)
// {
//     document.querySelector("h1").innerHTML="🚩Player 2 Wins";
// }
// else(randomnumber1===randomnumber2)
// {
//     document.querySelector("h1").innerHTML="Match Draw 🚩";
// }





var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
