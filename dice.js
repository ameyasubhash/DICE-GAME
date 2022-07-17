var randomNum1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNum1+".png");

var randomNum2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNum2+".png");

if(randomNum1==randomNum2){
    document.querySelector("h1").innerHTML="Draw !";
}
else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 win! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Player 2 win! 🚩";
}
