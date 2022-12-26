import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const start = document.querySelector('button');
const daysSpan = document.querySelector('.value[data-days]');
const hoursSpan = document.querySelector('.value[data-hours]');
const minutesSpan = document.querySelector('.value[data-minutes]');
const secondsSpan = document.querySelector('.value[data-seconds]');

let selectedTime = null;

start.disabled = true;
start.addEventListener('click', onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    selectedTime = new Date(selectedDates[0]);
    const currentTimeOnClose = new Date();

    if (selectedTime > currentTimeOnClose) {
      start.disabled = false;
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(input, options);

function onStart() {
  const interval = setInterval(() => {
    const currentTimeStart = new Date();
    const residual = selectedTime - currentTimeStart;
    const cmr = convertMs(residual);

    // daysSpan.textContent = addLeadingZero(cmr.days);
    // hoursSpan.textContent = addLeadingZero(cmr.hours);
    // minutesSpan.textContent = addLeadingZero(cmr.minutes);
    // secondsSpan.textContent = addLeadingZero(cmr.seconds);

    toSpan(daysSpan, cmr.days);
    toSpan(hoursSpan, cmr.hours);
    toSpan(minutesSpan, cmr.minutes);
    toSpan(secondsSpan, cmr.seconds);

    if (residual < 1000) {
      clearInterval(interval);
      input.disabled = false;
    }
  }, 1000);

  start.disabled = true;
  input.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function toSpan(span, value) {
  span.textContent = addLeadingZero(value);
}
