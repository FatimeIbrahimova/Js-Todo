const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");
const clear = document.querySelector(".clear");
const div = document.querySelector(".container");

const HideButton = document.createElement("button");
HideButton.innerText = "Hide";
HideButton.style.color = "blueviolet";
div.appendChild(HideButton);

const todo = [];
const addTodo = (e) => {
	e.preventDefault();
	todo.push({
		value: input.value,
		id: Math.floor(Math.random() * 100),
		checked: null,
	});
	console.log(todo);
	createList();
	input.value = "";
};
button.addEventListener("click", addTodo);
const createList = () => {
	const li = document.createElement("li");
	li.style.listStyle = "none";
	li.style.marginBottom = "8px";
	list.appendChild(li);
	const inputt = document.createElement("input");
	inputt.type = "checkbox";
	const deleteButton = document.createElement("button");
	deleteButton.style.marginLeft = "5px";
	deleteButton.style.color = "red";
	deleteButton.innerText = "delete";
	const span = document.createElement("span");
	span.innerText = input.value;

	li.appendChild(inputt);
	li.appendChild(span);
	li.appendChild(deleteButton);

	todo.map((el) => {
		inputt.addEventListener("click", () => {
			console.log(el.checked);
			if (!el.checked) {
				el.checked = true;
				li.style.textDecoration = "line-through";
			} else {
				el.checked = null;
				li.style.textDecoration = "none";
			}
		});
		console.log(todo);
	});

	deleteButton.addEventListener("click", () => {
		li.style.display = "none";
	});
	HideButton.addEventListener("click", () => {
		todo.map((el) => {
			console.log(el.checked);
			if (el.checked) {
				el.checked = true;
				li.style.display = "none";
			}
		});
	});
};
clear.addEventListener("click", () => {
	list.style.display = "none";
});
