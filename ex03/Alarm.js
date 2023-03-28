const setAlarmBtn = document.getElementById("setAlarmBtn");

setAlarmBtn.addEventListener("click", () => {
    const alarmInput = document.getElementById("alarmTime").value;
    const [hours, minutes] = alarmInput.split(":");
    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);
    alarmTime.setMilliseconds(0);
  const now = new Date();
  alert(alarmInput + "으로 알람을 설정했습니다.");

  if (isNaN(alarmTime)) {
    alert("잘못된 시간 형식입니다. 다시 입력해주세요.");
    return;
  }

  if (alarmTime <= now) {
    alert("알람 시간은 현재 시간 이후로 설정해야 합니다.");
    return;
  }

  const timeUntilAlarm = alarmTime - now;
  setTimeout(() => {
    alert("알람이 울립니다!");
  }, timeUntilAlarm);
});
