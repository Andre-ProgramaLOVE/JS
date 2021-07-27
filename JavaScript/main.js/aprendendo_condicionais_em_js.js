//um script para exemplificar o uso de condicionais em JS
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

	readline.question("Qual sua idade ? ", idade=>{
	console.log(`voce tem ${idade} anos`);
	if (`${idade}`>=18){
	console.log("voce é maior de idade");
	}else{
	console.log("voce é menor de idade");
	};
	readline.close();
});
