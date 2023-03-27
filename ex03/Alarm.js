let currentTimeInterval;

function setAlarm(){
  const alarmTime = document.getElementById("time").value;

  const currenttime = new Date();
  const hours = currenttime.getHours();
  const minutes = currenttime.getMinutes();

  if (`${hours}:${minutes}` === alarmTime) {
    alert('알림');
    currentTimeInterval = setTimeout(() => {
      clearInterval(currentTimeInterval);
    }, 6000);
  }
}
setInterval(setAlarm, 10000);

