// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// refrigerante/água - 1000 ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarnes = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCervejas = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarnes / 1000} kg de carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCervejas / 355)} latas de cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} garrafas de 2 litros de bebidas</p>`

    console.log(qtdTotalCarnes, qtdTotalCervejas, qtdTotalBebidas);
}

function carnePorPessoa(duracao){

    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }

}

function cervejaPorPessoa(duracao){

    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }

}

function bebidaPorPessoa(duracao){

    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }

}