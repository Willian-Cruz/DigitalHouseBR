//  uma polegada mede 25,4 milímetros
/*
function converterEmMm(polegadas){
    return console.log(polegadas * 25.4)
}

converterEmMm(10)*/

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

/*
function converterString(str){
    return 'https://www.'+ str +'.com.br'
}

console.log(converterString('digitalhousebrasil'))*/

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! )
/*
function exclamacao(frase){
    return console.log(frase+'!')
}

exclamacao('Sextou')*/


//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
/*
function converterIdade(anos){
    let idadeCachorro = anos * 7
    return idadeCachorro
}

console.log(converterIdade(7))*/

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês
/*let horasMes = 160
function horaTrabalho(salarioMensal){
    //let valorHora = salarioMensal/horasMes
    return salarioMensal/horasMes
}

console.log(`Com base no salário de R$1.600,00, o valor que você recebe é R$${horaTrabalho(1600)},00 por hora.`)*/

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores
/*let altura = 1.86
let peso = 95.4
function calculaIMC(altura, peso){
    let imc = peso / (altura * altura)
    return console.log(imc)
}

calculaIMC(altura, peso)*/

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
//Investigue o que o método de .toUpperCase() faz
/*
function converterMaiuscula(frase){
    //let maiuscula = frase.toUpperCase()
    return frase.toUpperCase()
}

console.log(converterMaiuscula('sextou!'))*/
//let item = 14
/*
function tipo(item){
    return console.log(typeof item)
}

tipo('exemplo')*/

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência

//C = (2 * PI) * R
/*
function calcularCircunferencia(raio){
    C = (2 * 3.14) * raio
    return C
}

console.log(`Raio 5cm = ${calcularCircunferencia(5)} de curcinferencia`)*/
//calcularCircunferencia(5)