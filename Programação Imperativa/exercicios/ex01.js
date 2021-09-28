//Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

var b = 10
var h = 10


function calculaArea(b, h){
    let area = b * h
    return console.log(area)
}


function calculaPerimetro(base, h){
    let perimetro = 2 * (b + h)
    return console.log(perimetro)
}

console.log(`${calculaArea(b, h)}, ${calculaPerimetro(b, h)}`)
