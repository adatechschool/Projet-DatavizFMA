function move() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if(minutes==03){document.getElementById("minutes").style.color="red";}
  document.getElementById("heure").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("secondes").innerHTML = seconds;
}
setInterval(move, 1000);


