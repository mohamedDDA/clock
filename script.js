function getClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ap = hours >= 12 ? 'pm' : 'am';
    ap = hours === 0 ? 'am' : 'pm';
    hours = (hours === 0) ? 12 : hours;
    hours = hours > 12 ? hours % 12 : hours;
    let time = hours + ":" + minutes + ":" + seconds + " " + ap;
    document.getElementById('clock').innerHTML = time;
}
getClock();

setInterval(getClock, 1000);
