const form = document.querySelector(".login__form");
const formInput = form.querySelector("input");
const greeting = document.querySelector(".greeting");

function printName(value) {
  greeting.classList.remove("hidden");
  greeting.innerHTML = `Hello~! ${value}`;
}

function handleForm(event) {
  event.preventDefault();
  const value = formInput.value;
  localStorage.setItem("user", value);
  form.classList.add("hidden");
  printName(value);
}

const getUser = window.localStorage.getItem("user");

function greetingFunc() {
  if (getUser === null) {
    form.classList.remove("hidden");
    form.addEventListener("submit", handleForm);
  } else {
    printName(getUser);
  }
}

greetingFunc();
