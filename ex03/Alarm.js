function setAlarm() {
  const alarmTime = document.getElementById("at").value; 
  const [hours, minutes] = alarmTime.split(":"); 

  const now = new Date(); 
  const alarm = new Date(now); 

  alarm.setHours(hours, minutes, 0); 

  const timeToAlarm = alarm - now; 

  if (timeToAlarm < 0) { 
    alarm.setDate(alarm.getDate() + 1);
  }

  setTimeout(() => { 
    alert("Alarm!!!!!!!!!!!!!!!!");
  }, timeToAlarm);
}