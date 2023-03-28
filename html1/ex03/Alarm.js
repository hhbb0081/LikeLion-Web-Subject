function alarm() {
    var nowtime = new Date();
    var alarmtime = new Date();
    alarmtime.setHours(document.getElementById("time").value.split(":")[0]);
    alarmtime.setMinutes(document.getElementById("time").value.split(":")[1]);
    alarmtime.setSeconds(0);

    var readytime = alarmtime - nowtime;

    setTimeout(function() {
        alert("알람");
    }, readytime);

    event.preventDefault();
}