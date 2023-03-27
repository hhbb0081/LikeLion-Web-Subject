
    function cal(){
        //var 변수 선언 = 값을 변수에 저장
        //Id에 들어오는 값을 Number()를 이용해 숫자로 받아온다.
        const first =Number(document.getElementById("firstId").value);
        const Second = Number(document.getElementById("SecondId").value);
        const op = document.getElementById("opId").value;
        var result;

        //조건문을 사용하여, option에 선택된 연산자에 맞게 수식에 따라 변수들 계산 
        if(op == "+"){
            result = first+Second;
        }else if(op == "-"){
            result = first-Second;
        }else if(op == "x"){
            result = first*Second;
        }else if(op == "/"){
            result = first/Second;
        }
            //result 변수에 값 저장
        document.getElementById("resultId").textContent= result;

        
}