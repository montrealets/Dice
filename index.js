var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);

console.log(randomNumber1);
console.log(randomNumber2);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}else {
  document.querySelector("h1").innerHTML="🚩 Draw! 🚩";
}
// Long solution 
/*if (randomNumber1===1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if(randomNumber1===2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if(randomNumber1===3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if(randomNumber1===4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if(randomNumber1===5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else if(randomNumber1===6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}*/
