

var cur_bar = 0;
var tree_level = 1;
var show_leaves_time = 2000;
var energy_cur = 0;
var energy_goal = 88;
var energy_percentage = 0;
var comment_count = 0;

function energy_up() {
	
	update_energy(5);
	update_progress_bar();
	update_tree();
}

function init(){
	$("#plus1").hide();
	document.getElementById("energy-count").innerHTML = energy_cur + " / " + energy_goal;
	friend1_info();
	comment_listen_enter();
}

function get_point_event(elem){
    elem.style.display = 'none'
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
		energy_cur = energy_goal;
    document.getElementById("energy-count").innerHTML = energy_cur + " / " + energy_goal;
}

function update_tree(){

	var tree_elem = document.getElementById("tree");   
	if(energy_percentage >= .75){
		tree_elem.src = "images/tree4.png";
		tree_elem.style.width = '36%';
        tree_elem.style.height = '55%';
        tree_elem.style.left = '31%'
	}
	else if(energy_percentage >= .50){
        tree_elem.src = "images/tree3.png";
        tree_elem.style.width = '26%';
        tree_elem.style.height = '40%';        
        tree_elem.style.left = '35%';
	}
	else if(energy_percentage >= .25){
        tree_elem.src = "images/tree2.png";
        tree_elem.style.width = '20%';
        tree_elem.style.height = '26%';
        tree_elem.style.left = '37%';
	}
	else{
        tree_elem.src = "images/tree1.png";
        tree_elem.style.width = '10%';
        tree_elem.style.height = '16%';
        tree_elem.style.left = '42%';
	}

}

function share_event(){
    alert("You have clicked share button!")
}

function friend1_info(){
    energy_cur = 95;
    energy_goal = 100
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	$("#leaf1").hide();
	$("#leaf3").hide();
	hide_all_comments();
}

function friend2_info(){
    energy_cur = 70;
    energy_goal = 100;
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	$("#leaf2").hide();
	$("#leaf3").hide();
	$("#leaf4").hide();
	hide_all_comments();
}

function friend3_info(){
    energy_cur = 55;
    energy_goal = 100
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	$("#leaf2").hide();
	$("#leaf4").hide();
	$("#leaf5").hide();
	hide_all_comments();
}

function friend4_info(){
    energy_cur = 30;
    energy_goal = 100
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	hide_all_comments();
}

function friend5_info(){
    energy_cur = 23;
    energy_goal = 100
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	$("#leaf4").hide();
	$("#leaf5").hide();
	hide_all_comments();
}

function friend6_info(){
    energy_cur = 9;
    energy_goal = 100
    update_energy(0);
	update_progress_bar();
	update_tree();
	show_leaves();
	$("#leaf5").hide();
	hide_all_comments();
}

function comment_button_event(){
	var content = document.getElementById("comment").value;
	content = "Cindy: " + content;
	document.getElementById("comment").value = "";
	if(comment_count == 0){
		document.getElementById("comment-content1").innerHTML = content;
		$("#comment-note1").show();
		comment_count += 1;
	}
	else if(comment_count == 1){
		document.getElementById("comment-content2").innerHTML = content;
		$("#comment-note2").show();
		comment_count += 1;
	}
	else{
		document.getElementById("comment-content3").innerHTML = content;
		$("#comment-note3").show();
		comment_count = 0;
	}
}

function comment_listen_enter(){
	var input = document.getElementById("comment");
    input.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode === 13) {
	        comment_button_event();
        }
    });
}

function hide_all_comments(){
	$("#comment-note1").hide();
	$("#comment-note2").hide();
	$("#comment-note3").hide();
}

init();
