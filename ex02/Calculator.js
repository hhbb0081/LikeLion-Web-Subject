function calculate()
{   
    let result = 0;
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let op = document.getElementById("opr").value;

    console.log(num1);
    console.log(num2);
    console.log(op);
    switch(op)
    {
        case "+":
           result = parseInt(num1) + parseInt(num2);
            break;

        case "-":
           result = parseInt(num1) - parseInt(num2);
            break;

        case "*":
            result = parseInt(num1) * parseInt(num2);
            break;

        case "/":
            result = parseInt(num1) / parseInt(num2);
            break;
    }

    document.getElementById("number3").innerHTML = result;


}