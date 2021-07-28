//esse script realiza uma função com if e else
var validar = 0;
function validaIdade(idade){
	if (idade >= 18){
		validar = alert("você é maior de idade");
	}else{
		validar = alert("você é menor de idade");
	}
	return validar;
}
var idade = prompt("Qual sua idade ? ");
validaIdade(idade)
validar;
