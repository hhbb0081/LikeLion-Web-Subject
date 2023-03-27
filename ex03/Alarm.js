function setAlarm(){
    var alarmTime = document.getElementById("alarmTime").value;

    var now = new Date();

    var alarm = new Date(now.toDateString() + " " + alarmTime);

    var timeDiff = alarm - now;

    // 알람 시간이 이미 지난 경우, 다음 날 동일한 시간에 알람을 울리도록 설정합니다. 즉 timeDiff<0일경우
    if (alarm < now | timeDiff<0) {
      alarm.setDate(alarm.getDate() + 1);
    }

  // 남은 시간 이후에 알람을 울리도록 설정합니다.
    setTimeout(function() {
        alert("알람이 울렸습니다!");
    }, timeDiff);

    setTimeout(function() {
      alert("알람이 설정되었습니다!");
    }, 500); // 0.5초 뒤에 메시지를 띄움
    // 알림 메시지를 띄울 때 폰트를 변경합니다.
    document.querySelector('.alert-message').classList.add('font-montserrat');  
}
