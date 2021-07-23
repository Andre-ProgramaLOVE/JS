//criação de uma lista em js
console.log("criando uma lista");
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);

//push >> adiciona elementos na lista
lista.push("uva");
console.log("adicionando um item na lista usando push");
console.log(lista);

//pop >> remove o último item da lista
lista.pop();
console.log("removendo o último item dalista com pop ");
console.log(lista);

//length >> mostra a quantidade de itens na lista
console.log("mostrando quantos itens a lista possui com length")
console.log("a sua lista tem "+lista.length+" itens");

//reverse >> mostra a lista ao contrário
console.log("mostrando a lista ao contrário com reverse");
console.log(lista.reverse());

//toString >> transforma os elementos da lista em string
console.log("transformando os itens da lista em string usando toString");
console.log(lista.toString());

//join >> adiciona elementos entre a lista ?
console.log("usando o join para incluir um traço na lista");
console.log(lista.join(" - "));


