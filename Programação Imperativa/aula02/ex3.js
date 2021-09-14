let _nome = 'José';
let _sobreNome = ' da Silva';
const idade = 27
const peso = 83.5;
const altura = 1.70;
const plano = true;
//Calcular IMC
function _calcularIMC(peso,altura){
    let imc = peso/(altura*altura);
    return imc;
}

console.log(_nome + _sobreNome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + _calcularIMC(peso, altura));