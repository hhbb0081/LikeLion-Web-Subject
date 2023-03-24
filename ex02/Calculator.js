function oper(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let operator = document.getElementById("oper").value;
    
    let result; 
    switch(operator){
        case '+':{
            result = first + second;
            break;
        }
        case '-':{
            result = first - second;
            break;
        }
        case '*':{
            result = first * second;
            break;
        }
        case '%':{
            result = (first/second).toFixed(2);
            break;
        }
    }
    console.log(result);

    let result_tag = document.getElementById("result");
    result_tag.innerHTML="Result: " + result;
}