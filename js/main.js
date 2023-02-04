// ELEMENTI DEL DOM

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// FUNZIONE

actualTime();

const timer = setInterval(actualTime, 1000);

function actualTime() {

    const now = new Date().getTime();
    const deadLine = new Date("2023-02-06 09:30");

    let delta = deadLine - now;

    if (delta >= 0) {

        let days = Math.floor(delta / (1000 * 60 * 60 * 24));
        let hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((delta % (1000 * 60)) / 1000);

        secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
        minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
        hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
        daysEl.innerHTML = (days < 10) ? "0" + days : days;
    }
}
