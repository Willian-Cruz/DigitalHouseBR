// Dado os três lados de um triângulo determinar o perímetro do mesmo.

var lado1 = 10 
var lado2 = 20
var lado3 = 30

function calculaPerimetroTriangulo(lado1, lado2, lado3){
    let perimetroTriangulo = lado1+lado2+lado3
    let tipo = ''
    if (lado1 == lado2 && lado2 == lado3) {
        tipo = console.log('Triângulo Equilátero: todos os lados são iguais!')
    } else if(lado1 == lado2 || lado2 == lado3){
        tipo = console.log('Triangulo Isosceles: dois lados são iguais!')
    }else if(lado1 != lado2 && lado2 != lado3){
        tipo = console.log('Triangulo Escaleno: todos os lado são diferente!')
    }
    let dadosTriangulo = console.log(`O perímetro do triangulo é: ${perimetroTriangulo}cm`)
    
    return dadosTriangulo
}

calculaPerimetroTriangulo(lado1,lado2,lado3)