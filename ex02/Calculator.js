btn = document.getElementById('btn');

operator = '+';
const changeValue = (target) => {
  //선택한 값 출력
  console.log(target.options[target.selectedIndex].text);
  operator = target.options[target.selectedIndex].text;
}

btn.onclick = function () {
  firstNum = document.getElementById('firstNumber').value;
  console.log(firstNum);

  secondNum = document.getElementById('secondNumber').value;
  console.log(secondNum);

  console.log(operator);

  result = 0;
  if (operator === '+') {
    result = Number(firstNum) + Number(secondNum)
  } else if (operator === '-') {
    result = Number(firstNum) - Number(secondNum)
  } else if (operator === '*') {
    result = Number(firstNum) * Number(secondNum)
  } else {
    result = Number(firstNum) / Number(secondNum)
  }

  document.getElementById('result').innerText = `${result}`
}