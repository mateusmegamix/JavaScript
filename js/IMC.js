/* Calcular indice de massa corporal */

function calcularIMC() {
var formulario = document.getElementById("formulario")
	
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;
	
	var altura = (metros * 100 + centimetros)/100;
	var imc = kilos / (altura * altura);
	
	formulario.imc.value = imc.toFixed(2);
	
	if(imc <=20) {
		alert("Vareta");
	} else if (imc >20 && imc <=25) {
		alert ("Peso Ideal");
	} else if (imc >25 && imc <=30) {
		alert ("Sobre Coxa");
	} else if (imc >30 && imc <=35) {
		alert ("Obesidade Boo");
	} else if (imc >35 && imc <=40) {
		alert ("Obesidade Severa");
	} else if (imc >40 && imc <=50) {
		alert ("Obesidade Mórbida");
	} else {
		alert ("Netto");
	}
}
   