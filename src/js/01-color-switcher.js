const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let changeColorInterval = null;

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

stop.disabled = true;

function onStart() {
  changeColorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  onDisabled(true, false);
}

function onStop() {
  clearInterval(changeColorInterval);

  onDisabled(false, true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onDisabled(x, y) {
  start.disabled = x;
  stop.disabled = y;
}
