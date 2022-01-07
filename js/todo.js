const todoForm = document.querySelector(".todo__form");
const todoInput = todoForm.querySelector("input");
const list = document.querySelector(".todo__list");

function printTodo(value) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = value;
  const button = document.createElement("button");
  button.innerText = "🥶";

  li.appendChild(span);
  li.appendChild(button);
  list.appendChild(li);
}

function handleList(event) {
  event.preventDefault();
  const value = todoInput.value;
  printTodo(value);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleList);
