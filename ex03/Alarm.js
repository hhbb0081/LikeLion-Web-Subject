function alarm(){
    let time = document.getElementById("time").value;
    let hourA = Number(time.split(":")[0]);
    let minA = Number(time.split(":")[1]);

    console.log("현재 시간: " +  hourA);
    console.log(minA);

    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        console.log()
        if((minA == min)&&(hourA == hour)){
            alert("일어나, 일어나야지");
            minA=-1;
        }
    }, 1000);
}