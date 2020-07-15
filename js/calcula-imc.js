var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    //console.log(pacientes[i]);
    
    var paciente = pacientes[i];
    
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 200) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        
    }

    if(altura <= 0 ||  altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido){
        var imc = calculaImc(peso,altura); // 100 / 2.0 * 2.0 = 100 / 4 = 25
        tdImc.textContent = imc; 
    }
}

function calculaImc(peso,altura){
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2); 
    }





//titulo.addEventListener("click") -> Adicionar um evento ao click do usuario
//console.log(form.altura.[value]);
//console.log(form.peso.[value]);

// Linha 62 -> No console dar um espaço de 4 elementros depois que ele chama a TR   
//console.log(nome);
//console.log(peso);
//console.log(altura);
//console.log(gordura);
