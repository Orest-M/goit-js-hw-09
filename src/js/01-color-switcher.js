const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStart);

stop.disabled = true;

function onStart() {
  const changeColorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  onDisabled(true, false);

  stop.addEventListener('click', onStop);

  function onStop() {
    clearInterval(changeColorInterval);

    onDisabled(false, true);

    stop.removeEventListener('click', onStop);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onDisabled(x, y) {
  start.disabled = x;
  stop.disabled = y;
}
