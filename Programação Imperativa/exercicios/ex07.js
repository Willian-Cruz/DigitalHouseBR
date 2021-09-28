//Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias

var idade = 6570

function converterIdade(idade){
    let anos = idade / 365
    let meses = anos * 12
    
    let idadeConvertida = console.log(`Você tem ${meses} meses`) 
    return idadeConvertida
}

console.log(`${converterIdade(idade)}`)
