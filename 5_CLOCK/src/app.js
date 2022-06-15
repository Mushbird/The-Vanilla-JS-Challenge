const clockTitle = document.querySelector(".js-clock");


function getCountingClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clockTitle.innerText = `${date.getDay()}D ${hours}h ${minutes}m ${seconds}s`;
}

getCountingClock();
setInterval(getCountingClock, 1000);