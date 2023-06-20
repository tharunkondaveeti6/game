var i=0;
var a=Math.round(Math.random()*100)+1;
check=()=>
{
    i++;
    var b=parseInt(document.getElementById("num").value);
    if(a==b)
    {
        document.getElementById("statement").textContent=("Congrats!!! You find the number in "+i+" attempts");
        i--;
    }
    else if(a>b)
    {
        document.getElementById("statement").textContent=("Try with greater");
    }
    else
    {
        document.getElementById("statement").textContent=("Try with lesser");
    }
}
