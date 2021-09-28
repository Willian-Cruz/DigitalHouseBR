//Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um
//valor de temperatura em Fahrenheit e exibi-lo em Celsius

function converterTemperatura(celsius){
    const fahrenheit = celsius * 1.8 + 32
    return fahrenheit
}

console.log(`O resultado da conversão é: ${converterTemperatura(1)} °F`)