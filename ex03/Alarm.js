const btn = document.getElementById('btn');
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

let setHours = 0;
let setMinutes = 0;

btn.onclick = function() {
  var time = document.getElementById('time');
  setHours = time.value.split(':')[0];
  setMinutes = time.value.split(':')[1];
  console.log(setHours, setMinutes);
}

function myTimer() {
  const date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  if (hours === Number(setHours) && minutes === Number(setMinutes)) {
    alert(`${setHours}시 ${setMinutes}분이 되었습니다!`);
    clearInterval(myVar);
  }
}

var myVar = setInterval(myTimer, 1000);