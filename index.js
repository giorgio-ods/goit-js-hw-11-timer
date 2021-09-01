const refs = {
  clockfaceDaysEl: document.querySelector('.value[data-value="days"]'),
  clockfaceHoursEl: document.querySelector('.value[data-value="hours"]'),
  clockfaceMinEl: document.querySelector('.value[data-value="mins"]'),
  clockfaceSecEl: document.querySelector('.value[data-value="secs"]'),
  clockface: document.getElementById('timer-1')
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  clockSettings = setInterval(() => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    this.updateClockface(time);
    this.finishTime(time);
  }, 1000)
  
  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.clockfaceDaysEl.textContent = `${days}`;
    refs.clockfaceHoursEl.textContent = `${hours}`;
    refs.clockfaceMinEl.textContent = `${mins}`;
    refs.clockfaceSecEl.textContent = `${secs}`;
  }

  pad(value) {
      return String(value).padStart(2, "0");
    }

  finishTime(time) {
    if (time < 0) {
      clearInterval(this.clockSettings);
      refs.clockface.textContent('Time is up')
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 23, 2022'),
});

  