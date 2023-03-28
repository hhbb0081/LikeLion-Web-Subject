function cal() {
    var v1 = Number(document.getElementById("v1").value);
    var v2 = Number(document.getElementById("v2").value);
    var op = document.getElementById("op").value;
    var res;

    if(op == "1")
    {
        res = v1 + v2;
    }
    else if(op == "2")
    {
        res = v1 - v2;
    }
    else if(op == "3")
    {
        res = v1 * v2;
    }
    else if(op == "4")
    {
        res = v1 / v2;
    }

    document.getElementById("res").innerHTML = res;
}