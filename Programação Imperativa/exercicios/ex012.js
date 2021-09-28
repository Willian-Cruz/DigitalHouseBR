//12. Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
//Km/h. Para tal, multiplique o valor em m/s por 3,6.
var velocidade = 20
function conversorVelocidade(velocidade){
    let kmH = velocidade * 3.6
    return kmH
}

console.log(`${velocidade}m/s equivalem a ${conversorVelocidade(velocidade)}Km/h`)