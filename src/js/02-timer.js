import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const start = document.querySelector('button');
const daysSpan = document.querySelector('.value[data-days]');
const hoursSpan = document.querySelector('.value[data-hours]');
const minutesSpan = document.querySelector('.value[data-minutes]');
const secondsSpan = document.querySelector('.value[data-seconds]');

start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const selectedTime = new Date(selectedDates[0]);
    const currentTimeOnClose = new Date();

    if (selectedTime > currentTimeOnClose) {
      start.disabled = false;

      start.addEventListener('click', onStart);
    } else {
      window.alert('Please choose a date in the future');
    }

    function onStart() {
      const interval = setInterval(() => {
        const currentTimeStart = new Date();
        const residual = selectedTime - currentTimeStart;
        const cmr = convertMs(residual);

        daysFin = cmr.days;
        hoursFin = cmr.hours;
        minutesFin = cmr.minutes;
        secondsFin = cmr.seconds;

        daysSpan.textContent = addLeadingZero(daysFin);
        hoursSpan.textContent = addLeadingZero(hoursFin);
        minutesSpan.textContent = addLeadingZero(minutesFin);
        secondsSpan.textContent = addLeadingZero(secondsFin);

        if (
          daysFin === 00 &&
          hoursFin === 00 &&
          minutesFin === 00 &&
          secondsFin === 00
        ) {
          clearInterval(interval);
          input.disabled = false;
        }
      }, 1000);

      start.disabled = true;
      input.disabled = true;
    }
  },
};

flatpickr(input, options);

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
