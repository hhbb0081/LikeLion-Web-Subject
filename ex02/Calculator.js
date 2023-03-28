function gocal(){
    let result=0;
    let fnum=parseFloat(document.getElementById('fnum').value);
    let snum=parseFloat(document.getElementById('snum').value);
    let option_value=document.getElementById('operator_value');
    let value=option_value.options[option_value.selectedIndex].value;
    if(value==="+"){
        result=fnum+snum;
    } else if(value==="-"){
        result=fnum-snum;
    } else if(value==="*"){
        result=fnum*snum;
    } else if(value==="/"){
        result=fnum/snum;
    }
    document.getElementById('result').textContent=result; }