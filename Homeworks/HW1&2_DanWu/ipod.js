// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "Cause I'm A Man"];
var volLevels = 3;
var index = 6;
var curTime = 0;
var timeBar;
var rangeBar;

document.getElementById("player-time").onclick=function(){
	curTime = rangeBar.value;
	document.getElementById("time-elapsed").innerHTML = secondsToMs(curTime);
};

function init() {
	var vols=document.getElementById("volume_bar").getElementsByTagName("div");
	for(var i=0; i<volLevels; i++){
		vols[i].style.backgroundColor="#9f5cc4";
	}
	index = getIndex();
	document.getElementById("name").innerHTML = tracklist[index];
	rangeBar = document.querySelector('input[type="range"]');	
};

//Get index of songs
function getIndex(){
	var arg = window.location.search.split("=")[1];
	var indexArg = parseInt(arg);
	if(isNaN(indexArg)){
		indexArg = 6;
	}
	return indexArg;	
}

//Volume up and down.
function volUp() {
	if(volLevels < 6){
		volLevels++;
		var vols=document.getElementById("volume_bar").getElementsByTagName("div");
		vols[volLevels-1].style.backgroundColor="#9f5cc4";
	}
}
function volDown() {
	if(volLevels > 0){
		var vols=document.getElementById("volume_bar").getElementsByTagName("div");
		vols[volLevels-1].style.backgroundColor="white";
		volLevels--;
	}
}

//Switch between play and pause
function switchPlay() {
	if(document.getElementById("play").innerHTML == "play_arrow"){
		play();
		document.getElementById("play").innerHTML = "pause";
	}
	else{
		pause();
		document.getElementById("play").innerHTML = "play_arrow";
	}
}

//Switch to the next or previous songs.
function nextSong() {
	if(index == 9){
		index = 0;
	}
	else{
		index++;
	}
	document.getElementById("name").innerHTML = tracklist[index];
	curTime = 0;
	document.getElementById("time-elapsed").innerHTML = secondsToMs(curTime);
	rangeBar.value = 0;
}

function prevSong() {
	if(index == 0){
		index = 9;
	}
	else{
		index--;
	}
	document.getElementById("name").innerHTML = tracklist[index];
	curTime = 0;
	document.getElementById("time-elapsed").innerHTML = secondsToMs(curTime);
	rangeBar.value = 0;
}

//Play or pause the song
function play(){
	timeBar = window.setInterval(timeGrow, 1000);
}

function pause(){
	window.clearInterval(timeBar);
}

//Time growing
function timeGrow(){
	if(curTime < 180){
		curTime++;
		document.getElementById("time-elapsed").innerHTML = secondsToMs(curTime);
		rangeBar.value++;
	}
		
	if(curTime == 180){
		if(index == 9){
			index = 0;
		}
		else{
			index++;
		}
		curTime = 0;
		document.getElementById("time-elapsed").innerHTML = secondsToMs(curTime);
		rangeBar.value = 0;
		document.getElementById("name").innerHTML = tracklist[index];
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
};

init();