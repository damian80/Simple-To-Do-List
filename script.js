var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';

	// Add a delete button next to the new list item
	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('Delete'));
	li.appendChild(deleteButton);

	// Delete the list item when the delete button is clicked
	deleteButton.addEventListener('click', function () {
		li.remove();
	});

	// Toggle .done class for the list item
	li.addEventListener('click', function () {
		li.classList.toggle('done');
	});
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

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

// Add delete buttons to existing list items
function addDeleteButtons() {
	var existingLis = ul.children;
	for (var i = 0; i < existingLis.length; i++) {
		var deleteButton = document.createElement('button');
		deleteButton.appendChild(document.createTextNode('Delete'));
		existingLis[i].appendChild(deleteButton);

		deleteButton.addEventListener('click', function () {
			this.parentElement.remove();
		});

		existingLis[i].addEventListener('click', function () {
			this.classList.toggle('done');
		});
	}
}

// Call the function to add delete buttons to existing list items
addDeleteButtons();
