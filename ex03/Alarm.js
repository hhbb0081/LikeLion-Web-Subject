function Mytime(){
    let setDate=document.getElementById('setT').value;
    
    let [setHour,setMin]=setDate.split(':');

    let date=new Date(); //현재시간 가져오는 객체생성
    let hour=date.getHours(); //시
    let min=date.getMinutes(); //분
    let time='${hour}:${min}' //문자열 생성
    
    //세팅한 시간과 현재 시간 비교
    if(setHour==hour && setMin==min){
        alert('정해진 시간이 되었습니다.');
    }
    setInterval(Mytime,60000);
}