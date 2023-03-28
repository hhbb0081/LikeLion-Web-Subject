function total()
{
  var num1=document.getElementById("num1"); //<body>부분에서 num1변수를 getElementById를 이용하여 값을 가져온다.
  var n1=num1.value; // num1에서 가져온 값을 n1에 저장해주고,
  var N1=parseInt(n1); // 계산을 하기위해 그 값을 int형으로 바꿔준다.

  var num2=document.getElementById("num2");
  var n2=num2.value;
  var N2=parseInt(n2);

  var N3;

  var op=document.getElementById("op");
  var OP=op.value;

  switch(OP)
  {
  case "plus": N3 = N1 + N2;  document.getElementById("res").innerHTML=N3; break;
  case "sub": N3 = N1 - N2; document.getElementById("res").innerHTML=N3; break;
  case "mul": N3 = N1 * N2; document.getElementById("res").innerHTML=N3; break;
  case "divi": N3 = N1 / N2; document.getElementById("res").innerHTML=N3; break;
  } //계산한 값을 N3에 저장한 후, 값을 res로 가져간다.
}