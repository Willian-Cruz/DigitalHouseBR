//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma
var r = 3
function dadosCirculo(raio){
    let perimetroCirculo = 2 * Math.PI * raio; // Calculo perimetro
    let areaCirculo = Math.PI * Math.pow(raio,raio)
    let dados = console.log(`A área do círculo é de: ${areaCirculo}\nLogo, seu perímetro é de: ${perimetroCirculo}`)
    return dados
}

console.log(dadosCirculo(r))