// Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

function calculaAreaQuadrado(lado){
    let areaQuadrado = lado * lado
    return areaQuadrado
}

function calculaPerimetroQuadrado(lado){
    let perimetroQuadrado = lado + lado + lado + lado
    return perimetroQuadrado
}

console.log(`A área é de: ${calculaAreaQuadrado(6)} m²,\nE o perímetro é de: ${calculaPerimetroQuadrado(6)} m`)