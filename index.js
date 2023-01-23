var random=Math.floor(Math.random()*6 +1);
var randomImage="dice" + random + ".png";
var imgsrc="images/" + randomImage;
var img1src=document.querySelectorAll("img")[0];
img1src.setAttribute("src", imgsrc);


var random1=Math.floor(Math.random()*6 +1);
var random1Image="dice" + random1 + ".png";
var imgsrc2="images/" + random1Image;
var img2src=document.querySelectorAll("img")[1];
img2src.setAttribute("src", imgsrc2);
if(random>random1)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (random1>random){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
 document.querySelector("h1").innerHTML="DRAW !";
}