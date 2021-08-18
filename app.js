let hourHand = document.querySelector(".hand-hour");
let minuteHand = document.querySelector(".hand-minute");
let secondHand = document.querySelector(".hand-second");

function getTime() {
  let now = new Date();
  //console.log(now);
  let seconds = now.getSeconds();
  let secondDegree = (seconds / 60) * 360 + 90 ;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + ((seconds/60)*6) - 90 ;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + ((minutes/60)*30) - 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getTime, 1000);
