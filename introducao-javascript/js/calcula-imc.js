//lOOP PARA NÃO PRECISAR REPETIR AS CONDIÇÕES
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    //Variaveis buscando tags do HTML
    var paciente = pacientes[i];



    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;


    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;



    var tdimc = paciente.querySelector(".info-imc");
    //Condição

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if (!pesoValido) {

        pesoValido = false
        tdimc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaValida) {

        alturaValida = false
        tdaltura.textContent = "Altura Inválida!"
        paciente.classList.add("paciente-invalido")
    }
    if (pesoValido&&alturaValida) {
        var imc = calculaImc(peso,altura)
        tdimc.textContent = imc

    }

}
function calculaImc(peso, altura) {

    var imc=0
    imc=peso / (altura * altura);
    return imc.toFixed(2)
    
}


function validaPeso(peso){
    if(peso>0 && peso<100){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >0 && altura<=3.00){
        return true
    } else{
        return false
    }
}