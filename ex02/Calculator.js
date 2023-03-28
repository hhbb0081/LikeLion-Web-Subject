function cal()
{
    // 각 id가 FirstNUm인 input 태그에서 value 값을 가져오겠다. 
    let v1 = document.getElementById("FirstNum").value ;
    console.log(v1);
    let v2 = document.getElementById("secondNum").value;
    console.log(v2);
    let op = document.getElementById("op").value; 
    console.log(op);
    let res ; 

    if(op=="+")  res = parseInt(v1) +  parseInt(v2) ;
    else if(op=="-") res = v1 - v2 ;
    else if (op=="*") res = v1 * v2 ;
    else if (op=="/") res = v1 / v2 ; 

    document.getElementById("result").innerHTML = "Result : " + res;
}

