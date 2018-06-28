

var cur_bar = 0
var tree_level = 1
var show_leaves_time = 2000
var energy_cur = 0
var energy_goal = 100
var energy_percentage = 0

function init(){
	$("#plus1").hide();
	document.getElementById("energy-count").innerHTML = energy_cur + " / " + energy_goal;
}

function energy_up() {
	
	update_energy(5);
	update_progress_bar();
	update_tree();
}

function get_point_event(elem){
    elem.style.display = 'none'
	energy_up();
	$("#plus1").show()
	$("#plus1").delay(500).hide(300);
}
	
function show_leaves() {
    $(".leaf").show();
}

function update_progress_bar(){
	var elem = document.getElementById("progressbar");  
	energy_percentage = energy_cur / energy_goal; 
	elem.style.width = Math.round(energy_percentage * 100) + '%'; 
	//elem.innerHTML = Math.round(energy_percentage * 100) + '%';
}

function update_energy(energy_plus){
	energy_cur += energy_plus;
	if (energy_cur > energy_goal)
		energy_cur = energy_goal
    document.getElementById("energy-count").innerHTML = energy_cur + " / " + energy_goal;
}

function update_tree(){

	var tree_elem = document.getElementById("tree");   
	if (energy_percentage == 1){
		alert("See your real tree in \"MY PLANTING\"!");
	}

	if (energy_percentage >= .75 && tree_level == 3){
		tree_elem.src = "images/tree4.png";
		tree_elem.style.width = '36%';
        tree_elem.style.height = '55%';
        tree_elem.style.left = '31%'
		setTimeout(show_leaves, show_leaves_time);
		tree_level = 4
	}
	if (energy_percentage >= .50 && tree_level == 2){
        tree_elem.src = "images/tree3.png";
        tree_elem.style.width = '26%';
        tree_elem.style.height = '40%';        
        tree_elem.style.left = '35%';
		setTimeout(show_leaves, show_leaves_time);
		tree_level = 3
	}
	if (energy_percentage >= .25 && tree_level == 1){
        tree_elem.src = "images/tree2.png";
        tree_elem.style.width = '20%';
        tree_elem.style.height = '26%';
        tree_elem.style.left = '37%';
		setTimeout(show_leaves, show_leaves_time);
		tree_level = 2
	}
	
}

function share_clicked(){
    // alert("You have clicked share button!");
    document.getElementById('share_info').style.display = "block";
}

function share_event(){
	alert("You have shared your virtual tree on Facebook!");
	document.getElementById('share_info').style.display = "none";
}

function share_cancel(){
	document.getElementById('share_info').style.display = "none";
}

function close_collect_tip(){
	document.getElementById("collect-tip").style.opacity = "0";
}

init()
