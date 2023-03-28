function result(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let operator=document.getElementById("operator").value;
    let result=0;
    if(operator==='plus')
        result=num1+num2;
    else if(operator==='minus')
        result=num1-num2;
    else if(operator==='mul')
        result=num1*num2;
    else if(operator==='div')
        result=num1/num2;
    else
        result="No Result";
    document.getElementById("result").textContent = result;
    
}