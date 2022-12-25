const form = document.querySelector('.form');
const firstDelayInput = document.querySelector('input[name = "delay"]');
const stepInput = document.querySelector('input[name = "step"]');
const amountInput = document.querySelector('input[name = "amount"]');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const firstDelay = Number(firstDelayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i += 1) {
    const delayStep = firstDelay + step * (i - 1);
    createPromise(i, delayStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
