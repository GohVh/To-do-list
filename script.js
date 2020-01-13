//toggle
//add
//delete
var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonDelete = document.getElementsByClassName("delete");

for (var i = 0; i <buttonDelete.length; i++) {
	buttonDelete[i].addEventListener("click", deleteItem);
}

function deleteItem(event){
	if (event.target.tagName === "BUTTON") {
		event.target.parentNode.remove();
	}
}

function doneItem(event){
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("BUTTON");
	button.innerHTML="Delete";
	button.onclick = deleteItem;

	li.appendChild(document.createTextNode(input.value+" "));
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneItem);
