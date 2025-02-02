var amount = prompt("WELCOME TO CURRENCY CONVERTER!!" +
    " PLEASE INPUT VALUE FOR PHILIPPINE PESOS(Php): ");

var value = prompt("What would you like to convert? ");

// rates
var phpusd = 0.0171;
var phpjpy = 2.6513;
var phpeur = 0.0163;
var phpgbp = 0.0137;
var phpcad = 0.0246;

if(value=="usd") {
    result = amount*phpusd;
} else if(value=="jpy") {
    result = amount*phpjpy;
} else if(value=="eur") {
    result = amount*phpeur;
} else if(value=="gbp") {
    result = amount*phpgbp;
} else if(value=="cad") {
    result = amount*phpcad;
}

var message = "The converted value is: " + result;

document.getElementById('info').innerHTML=amount;
document.getElementById('store').innerHTML=value;
document.getElementById('display').innerHTML=message;
