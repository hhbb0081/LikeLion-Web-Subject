function cal(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var oper = document.getElementById("Operator").value;
    var rresult = 0;

    if (oper == "+") {
        rresult = num1 + num2;
      } else if (oper == "-") {
        rresult = num1 - num2;
      } else if (oper == "*") {
        rresult = num1 * num2;
      } else if (oper == "/") {
        rresult = num1 / num2;
      }
      console.log(rresult);
    document.getElementById("result").innerHTML = '<h1><b>Result: '+rresult+'</b></h1>';
}