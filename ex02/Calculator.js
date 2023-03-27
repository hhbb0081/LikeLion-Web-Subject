function calculate() {
  // 피연산자와 연산자 값을 가져오기
  const operand1 = parseInt(document.getElementById('operand1').value);
  const operand2 = parseInt(document.getElementById('operand2').value);
  const operator = document.getElementById('operator').value;
  
  // 계산하기
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = '잘못된 연산자입니다.';
      break;
  }
  
  // 결과 출력하기
  document.getElementById("result").innerHTML =  ("Result : ")+ result;
}

