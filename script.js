const inputbox = document.getElementById("input-box");
const date = document.getElementById("date");
const listcontainer = document.getElementById("list-container");

function AddTask(){
	if (inputbox.value == '') {
		alert("Pleae Enter Your Work Progress");
	}
	if (date.value == '') {
		alert("Please Enter The Date");
		
	}
	else{
		let li = document.createElement("li");
	li.innerHTML = `${inputbox.value}&nbsp &nbsp - &nbsp &nbsp (${date.value})`;
		listcontainer.appendChild(li);
		
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputbox.value='';
	date.value='';
	saveData();
	updateTaskCount();
}
function updateTaskCount() {
	let count = document.querySelectorAll("#list-container li").length;
	document.getElementById("task-count").textContent = "Total Tasks: " + count;
}

listcontainer.addEventListener ("click", function(e){
if (e.target.tagName === "LI"){
	e.target.classList.toggle("checked");
	saveData();
	updateTaskCount();
}
else if (e.target.tagName === "SPAN"){
	e.target.parentElement.remove();
	saveData();
	updateTaskCount();
}
}, false);

function saveData(){
	localStorage.setItem("data", listcontainer.innerHTML);
}

function showTasks(){
	listcontainer.innerHTML = localStorage.getItem("data");
}
showTasks();
updateTaskCount();