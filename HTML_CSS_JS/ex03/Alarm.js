function alarmSet() {
  // 입력된 알람 시간을 가져옴
  const alarmInput = document.getElementById("alarmTime");
  const alarmTime = alarmInput.value;

  // 알람 시간이 입력되었을 경우
  if (alarmTime !== "") {

    alert("알람이 설정되었습니다!");

      const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const alarmHours = parseInt(alarmTime.substr(0, 2), 10);
      const alarmMinutes = parseInt(alarmTime.substr(3, 2), 10);

      if (hours === alarmHours && minutes === alarmMinutes) {
        // 알람 시간이 되면 알람을 울림
        alert("알람입니다!");
        clearInterval(interval);
      }
    }, 1000); // 1초마다 실행
  }
}