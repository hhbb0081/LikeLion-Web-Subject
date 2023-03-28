function compute() {
    let result = document.getElementById("result");
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("oper").value;

    switch (operator) {
        case '+':
            result.innerText = n1 + n2;
            break;
        case '-':
            result.innerText = n1 - n2;
            break;
        case '*':
            result.innerText = n1 * n2;
            break;
        case '/':
            result.innerText = n1 / n2;
            break;
        default:
            result.innerText = "Invalid operator";
            break;
    }
}