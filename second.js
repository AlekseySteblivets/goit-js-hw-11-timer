
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
// class Timer {
//     constructor (daysSelector, hoursSelector, minutesSelector, secsSelector, countdown = 0) {
//         // this.element = document.querySelector(selector);
//         this.days = document.querySelector(daysSelector);
//         this.hours = document.querySelector(hoursSelector);
//         this.minutes = document.querySelector(minutesSelector);
//         this.secs = document.querySelector(secsSelector);
//         this.countdown = countdown;
//     }

//     getSeconds() {
//         const secs = Math.floor((this.countdown % (1000 * 60)) / 1000);
//         return transformValue(secs);
//     }

//     getMinutes() {
//         const mins = Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
//         return transformValue(mins);
//     }

//     getHours() {
//         const hours = Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         return transformValue(hours);
//     }

//     getDays() {
//         const days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));
//         return transformValue(days);

//     }

//     render() {
//         this.days.innerHTML = `${this.getDays()}`;
//         this.hours.innerHTML = `${this.getHours()}`;
//         this.minutes.innerHTML = `${this.getMinutes()}`;
//         this.secs.innerHTML = `${this.getSeconds()}`;

//     }

//     init() {
//         const interval = setInterval(() => {
//             this.countdown -= 1000;
//             if(this.countdown <= 0) {
//                 clearInterval(interval);
//             }
//             this.render();
//         }, 1000)
//     }

// }

// function transformValue (value) {
//     return String(value).padStart(2, '0');
// } 

// const timer = new Timer ('span[data-value=days]', 'span[data-value=hours]', 'span[data-value=mins]', 'span[data-value=secs]', 55500000);
// timer.init();
