const alarmContainer = document.querySelector('.js-alarm');

const setTime = alarmContainer.querySelector('input');
function getAlarm(){
  const setValue = setTime.value;
  const date = new Date();  //시간 형태를 저장하기 위해 쓰는 라이브러리
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  if(current === setValue){
      alert("It's time to sleep!");
      clearInterval(alarm); //현재시간=세팅시간이 되어서 알람이 울리면, 현재시간을 갱신하는 alarm이라는 변수를 멈춤
    }
  
}
function init(){
    alarm = setInterval(getAlarm, 1000); // 1초마다 getAlarm(현재시간을 '한번만' 받아옴)을 실행시켜서 현재시간을 갱신시킨다.
}