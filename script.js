// It gets references to HTML elements using getElementById and querySelector. button corresponds to an HTML element with the id "enter," input corresponds to an element with the id "userinput," and ul corresponds to the first <ul> element found on the page.


let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

// The inputLength function returns the length of the text entered in the input field with the id "userinput."

function inputLength() {
	return input.value.length;
}
// The createListElement function creates a new list item (<li>) element, appends the text from the input field as a text node, and then appends the list item to the unordered list (<ul>). It also clears the input field after creating the list item.

function createListElement() {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}
// The addListAfterClick function is called when the button with the id "enter" is clicked. It checks if the input length is greater than 0 (i.e., if there's text in the input field), and if so, it calls the createListElement function to add a new item to the list.
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// The addListAfterKeypress function is called when a key is pressed in the input field. It checks if the input length is greater than 0 and if the key code is 13 (which corresponds to the Enter key). If both conditions are met, it calls the createListElement function to add a new item to the list.
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// Event listeners are added to the button and input elements. When the button is clicked, it calls addListAfterClick, and when a key is pressed in the input field, it calls addListAfterKeypress to handle Enter key presses.
button.addEventListener('click', addListAfterClick);
input.addEventListener('keydown', addListAfterKeypress);

// This code sets up a simple to-do list where you can enter tasks in the input field, press Enter, or click the button to add them to the list. It's a good starting point for building a basic to-do list web application.