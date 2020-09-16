var endDay = '1 October 2020';
var d = document.getElementById('day');
var h = document.getElementById('hours');
var m = document.getElementById('minute');
var s = document.getElementById('seconds');

function countDown() {
    let newDate = new Date(endDay);
    let curerntDate = new Date();

    let tottalSeconds = (newDate - curerntDate) / 1000;
    let days = Math.floor(tottalSeconds / 3600 / 24);
    let hours = Math.floor(tottalSeconds / 3600) % 24;
    let minutes = Math.floor(tottalSeconds / 60) % 60;
    let secs =  Math.floor(tottalSeconds) % 60;
    

    d.innerHTML = days < 10 ? `0${days}` : days;
    h.innerHTML = hours < 10 ? `0${hours}` : hours;
    m.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    s.innerHTML = secs < 10 ? `0${secs}` : secs;
}

countDown();

setInterval(countDown, 1000);s