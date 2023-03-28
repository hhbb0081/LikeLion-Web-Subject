function setalarm(){ 
    const alarmC = document.getElementById("time").value;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if((hours == alarmC)&&(minutes == alarmC)){
        alert("Wake up!");
        clearInterval(alarm);
    }
    function init(){
        alarm = setInterval(setalarm, 1000);
      }
      init();
}



