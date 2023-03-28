function setAlarm() {
    let alarmTime = document.getElementById("at").value; // 알람 시간을 입력받음
    let [hours, minutes] = alarmTime.split(":"); // 시간과 분을 추출
    let now = new Date(); // 현재 시간을 구함
    let alarm = new Date(); // 알람 시간을 설정함
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(0);


    let timeToAlarm = alarm - now; // 알람 울림까지 남은 시간을 계산
    if (timeToAlarm < 0) { // 알람 시간이 이미 지난 경우, 다음 날로 설정
        alarm.setDate(alarm.getDate() + 1);
        timeToAlarm = alarm - now;
    }

    setTimeout(() => { // 알람 울림
        alert("Time's up!");
    }, timeToAlarm);
}