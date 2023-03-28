
function alarm() {
    //입력 받은 시간
    var time = document.getElementById("time").value;   
    console.log(time);

    var input_hour = Number(time.split(":")[0]);
    console.log(Number(time.split(":")[0]));
    var input_min = Number(time.split(":")[1]);
    console.log(Number(time.split(":")[1]));

    //현재 시간
    var today = new Date();

    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2); 

    console.log(hours);
    console.log(minutes);
    console.log(seconds);


    //시간 체크
    if(input_hour == hours && input_min == minutes) {
        alert("일어날 시간입니다.");
    } 
        //alert("시간이 맞지 않습니다");
        //alarm(); //현재 시간 무한 체크
}