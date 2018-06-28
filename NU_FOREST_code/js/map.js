function openModal1() {
    document.getElementById('myModal1').style.display = "block";
}

function closeModal1() {
    document.getElementById('myModal1').style.display = "none";
}

function openModal2() {
    document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
}

function share_clicked(){
    // alert("You have clicked share button!");
    document.getElementById('share_info').style.display = "block";
}

function share_event(){
	alert("You have shared your planting tree on Facebook!");
	document.getElementById('share_info').style.display = "none";
}

function share_cancel(){
	document.getElementById('share_info').style.display = "none";
}

function close_collect_tip(){
	document.getElementById("collect-tip").style.opacity = "0";
}
