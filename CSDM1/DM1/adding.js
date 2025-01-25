var num1 = parseInt(prompt("1st number: "));

document.getElementById('fnum').innerHTML=num1;
var num2 = parseInt(prompt("2nd number: "));
document.getElementById('snum').innerHTML=num2;
var num3 = parseInt(prompt("3rd number: "));
document.getElementById('tnum').innerHTML=num3;

var sum = num1+num2+num3;
var difference = num1-num2-num3;
var product = num1*num2*num3;

document.getElementById('sagotsasum').innerHTML=sum;
document.getElementById('sagotsadiff').innerHTML=difference;
document.getElementById('sagotsaproduct').innerHTML=product;

var text1 ="The sum of " + num1 + " + " + num2 + " + " + num3 + " = " + sum;
var text2 ="The difference of " + num1 + " - " + num2 + " - " + num3 + " = " + difference;
var text3 ="The product of " + num1 + " * " + num2 + " * " + num3 + " = " + product;

document.getElementById('t1').innerHTML=text1;
document.getElementById('t2').innerHTML=text2;
document.getElementById('t3').innerHTML=text3;



// parseInt