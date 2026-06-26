
function add(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
     let sum=parseFloat(num1)+parseFloat(num2);
     document.getElementById("result").innerHTML=sum;
}
function subtract(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value; 
    let difference=parseFloat(num1)-parseFloat(num2);
    document.getElementById("result").innerHTML=difference;
}

function multiply(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let product=parseFloat(num1)*parseFloat(num2);
    document.getElementById("result").innerHTML=product;
}
function divide(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(num2==0){
        document.getElementById("result").innerHTML="Cannot divide by zero";
        return;
    }
    let quotient=parseFloat(num1)/parseFloat(num2);
    document.getElementById("result").innerHTML=quotient;
}
