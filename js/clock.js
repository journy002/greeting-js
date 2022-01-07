const clock = document.querySelector(".clock");

function handleClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
  handleClock();
  setInterval(handleClock, 1000);
}

startClock();
