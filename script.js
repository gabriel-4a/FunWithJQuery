$(document).ready(function(){
// all jQuery methods go here...
$("#runningman-img").hover(enter, leave);
function enter(){
  this.src = "images/runningman-giphy.gif"
}

function leave(){
this.src = "images/runningman-icon.png"
}

$("#taketheL-img").hover(enter1, leave1);
function enter1(){
  this.src = "images/taketheL-giphy.gif"
}

function leave1(){
this.src = "images/taketheL-icon.png"


}

$("electroshuffle-img").hover(enter, leave);
function enter(){
  this.src="images/electroshuffle-giphy.gif"
}

function leave(){
  this.src= "images/electroshuffle-icon.png"
}




});
