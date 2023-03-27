const alarmContainer = document.querySelector('.alarm');
const currentTime = alarmContainer.querySelector('h1');

const setTime = alarmContainer.querySelector('input'); // input type = "time" (첫 번째 요소 반환)

let alarm;

function getAlarm() {
    const setValue = setTime.value; 
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    if( current === setValue ){
  	    alert("설정한 시간이 되었습니다!");
        clearInterval(alarm);
    }
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  currentTime.innerText = 
  `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {  // 초기화 함수
  getTime();  
  setInterval(getTime, 1000);  // setInterval() : 주기적으로 인자를 실행하는 함수
  alarm = setInterval(getAlarm, 1000);
}

init();