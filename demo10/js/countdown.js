let endDate = new Date().getTime() + 28800 * 1000;
let now = new Date().getTime();
let timeleft = endDate - now;
let hourLeft = document.getElementById("hour-count");
let minLeft = document.getElementById("min-count");
let secLeft = document.getElementById("sec-count");

setInterval(function() {
  now = new Date().getTime();
  timeleft = endDate - now;
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  hourLeft.innerText = hours < 10 ? `0${hours}` : hours;
  minLeft.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secLeft.innerText = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
