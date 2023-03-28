function cal(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var operator = document.getElementById("operator").value;
    var result;

    if(operator == "+"){
        result = n1+n2;
    }else if(operator == "-"){
        result = n1-n2;
    }else if(operator == "*"){
        result = n1*n2;
    }else if(operator == "/"){
        result = n1/n2;
    }
    document.getElementById("result").value = result;
}

function reset(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").value = "";
}


