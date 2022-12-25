const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStart);

stop.disabled = true;

function onStart() {
  const changeColorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  start.disabled = true;
  stop.disabled = false;

  stop.addEventListener('click', onStop);

  function onStop() {
    clearInterval(changeColorInterval);

    stop.disabled = true;
    start.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
