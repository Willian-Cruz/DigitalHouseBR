var num = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;


let adicionar = function(num1, num2){
    return num1 + num2;
}

let subtrair = function(num1, num2){
    return num1 - num2;
}

let dividir = function(num1, num2){
    return num1 / num2;
}

let multiplica = function(num1, num2){
    return num1 * num2;
}


console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log(`O resultado da soma é igual a: ${adicionar(10,2)}`);
console.log(`O resultado da subtração é: ${subtrair(100, 50)}`);
console.log(`O resultado da divisão entre é: ${dividir(50, 5)}`);
console.log(`O resultado da multiplicacao é: ${multiplica(20, 20)}`);
console.log(`O  quadrado de 10 é: ${quadradoDoNumero(10)}`);
console.log(`A média entre 3, 9 e 12 é: ${mediaDeTresNumeros(3, 9, 12)}`);
console.log(`A parcentagem de 15% de 200 é igual a: ${calculaPorcentagem(200, 15)}`);
console.log(`O valor 10 equivale a ${geradorDePorcentagem(10, 1000)}% de 1000`);

function quadradoDoNumero(num) {
    return multiplica(num, num);
}

function mediaDeTresNumeros(num1, num2, num3) {
    let soma1 = adicionar(num1, num2);
    let soma2 = adicionar(soma1, num3);
    return dividir(soma2, 3);
}

function calculaPorcentagem(numero, porcentagem) {
    let porcentagemCentesimal = multiplica(porcentagem, 0.01);
    return multiplica(porcentagemCentesimal, numero);
}

function geradorDePorcentagem(num1, num2) {
    let porcentagemCentesimal = dividir(num1, num2);
    return multiplica(porcentagemCentesimal, 100);
}

/*
function adicionar(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplica(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}
*/