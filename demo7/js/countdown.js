var endDate = new Date(2020, 7, 9, 8).getTime();
var now = new Date().getTime();
var timeleft = endDate - now;
var dayLeft = document.getElementById("day-left");
var hourLeft = document.getElementById("hour-left");
var minLeft = document.getElementById("min-left");
var secLeft = document.getElementById("sec-left");

setInterval(function() {
  now = new Date().getTime();
  timeleft = endDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  dayLeft.innerText = days < 10 ? `0${days}` : days;
  hourLeft.innerText = hours < 10 ? `0${hours}` : hours;
  minLeft.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secLeft.innerText = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
