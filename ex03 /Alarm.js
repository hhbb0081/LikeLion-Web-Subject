function alarm()
{
    let timeControl = document.querySelector(".alarm");
    let time = timeControl.value ; 
    let arr = time.split(":");    
    let input_hour = Number(arr[0]) ;
    let input_min = Number(arr[1]) ; 

    const timer = setInterval(() => {
        let date = new Date() ; 
        let hours = date.getHours() ;
        let minutes = date.getMinutes(); 
        if((hours==input_hour) && (minutes == input_min) )
        {
            alert("지금은 " + time + "입니다.");
            clearInterval(timer);
        }
    },1000);




}


