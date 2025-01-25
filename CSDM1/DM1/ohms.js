var I = prompt("Enter current (I) in amperes: ");
document.getElementById('current').innerHTML=I;
var R = prompt("Enter resistance (R) in ohms: ");
document.getElementById('resistance').innerHTML=R;

// Ohm's Law: Voltage = I * R
    var V = I * R

document.getElementById('answer').innerHTML=V;

let text = "Voltage(Volts) = " + V;
document.getElementById('t1').innerHTML=text;
