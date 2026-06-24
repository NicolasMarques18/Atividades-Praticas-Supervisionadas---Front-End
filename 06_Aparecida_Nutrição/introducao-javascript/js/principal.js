var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

var pacientes = document.querySelectorAll(".paciente");

function validaPeso(peso) {
    if (peso > 0 && peso <= 595) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 2.72) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura = tdGordura.textContent;

    var pesoehvalido = validaPeso(peso);
    var alturaehvalida = validaAltura(altura);

    if (!pesoehvalido) {
        tdpeso.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaehvalida) {
        tdaltura.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    var tdimc = paciente.querySelector(".info-imc");
    if (pesoehvalido && alturaehvalida) {
        tdimc.textContent = calculaImc(peso, altura);
    } else {
        tdimc.textContent = "-";
    }
}