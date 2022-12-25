const firstDelay = document.getElementsByName('delay');
const step = document.getElementsByName('step');
const amount = document.getElementsByName('amount');
const submit = document.querySelector('button');

// function createPromise(position, delay) {
//   setTimeout(() => {}, delay);

//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// submit.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();

//   let totalDelay = 0;

//   console.log(firstDelay.value);
// }
