var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 = 25

console.log(imc);








//console.log(paciente); // tr
//console.log(tdAltura); // td que tem o peso
//console.log(altura); // obter 100



//console.log(titulo);
//console.log(titulo.textContent);
//console.log("Fui carregado de um arquivo externo");
//var mensagem = "Bem vindo ao meu site"
//alert(mensagem);
