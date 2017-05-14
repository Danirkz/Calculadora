var n=0;

function Suma()
{
var numero1 = Number(document.getElementById("N1").value)
var numero2 = Number(document.getElementById("N2").value)
document.getElementById("Hola").innerHTML=" El resultado de la opracion es: " + (numero1+numero2);
}
function Resta()
{
var numero1 = Number(document.getElementById("N1").value)
var numero2 = Number(document.getElementById("N2").value)
document.getElementById("Hola").innerHTML=" El resultado de la opracion es: " + (numero1-numero2);
}
function Multiplicacion()
{
var numero1 = Number(document.getElementById("N1").value)
var numero2 = Number(document.getElementById("N2").value)
document.getElementById("Hola").innerHTML=" El resultado de la opracion es: " + (numero1*numero2);
}
function Divicion()
{
var numero1 = Number(document.getElementById("N1").value)
var numero2 = Number(document.getElementById("N2").value)
document.getElementById("Hola").innerHTML=" El resultado de la opracion es: " + (numero1/numero2);
}