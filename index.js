var randomNumber1=Math.floor((Math.random())*6)+1;
// Math.floor(randomNumber1);
// randomNumber1=randomNumber1+1;
// console.log(randomNumber1);

var randomDiceImage="images/dice"+ randomNumber1 +".png";

document.querySelector("img").src=randomDiceImage;

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].src=randomDiceImage2;

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=" 🎆 Player1 wins! img";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 wins!🎇";
}
else
{
    document.querySelector("h1") .innerHTML="Draw!😣";
}
