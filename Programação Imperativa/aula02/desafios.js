function teste1 (x ,y){
    return y - x;
}

console.log(teste1(10, 40));

function teste2(x , y){
    return x * 2;
    console.log(x)
    return x / 2;
}
console.log(teste2(10));

function converterEmCm(polegadas){
    return polegadas * 2.54;
}

console.log(`O valor de 10 polegadas corresponde a ${converterEmCm(10)}cm`);

function converterURL(palavra){
    return "https://www." + palavra + ".com.br";
}

console.log(converterURL("digitalhouse"));
console.log(`URL: ${converterURL("digitalhouse")}`);

function exclamacao(frase){
    return frase +"!";
}

console.log(exclamacao("Sextou"));

function idadeCanina(idadeCao){
    return idadeCao * 7;
}

console.log(`Um cachorro com 2 tem a idade de uma pessoa com ${idadeCanina(2)} anos.`)

function horaTrabalho(valorHora){
    return valorHora * 160;
}

console.log(`Seu salário será de R$${horaTrabalho(15)}`)

