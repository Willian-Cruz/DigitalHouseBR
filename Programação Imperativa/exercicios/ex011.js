//Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida
//pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por
//2 notas de provas

var notas1Bimestre = [7,6] // 13 - media 6.5
var notas2Bimestre = [9,7] // 16 - media 8

function calcNota(notas2Bimestre){
   let soma1 = 0
    for (let i = 0; i < notas1Bimestre.length; i++) {
        soma1 += notas1Bimestre[i]
    }

    let soma2 = 0
    for (let i = 0; i < notas2Bimestre.length; i++) {
        soma2 += notas2Bimestre[i]
    }

    let mediaSemestral = (soma1 + soma2) / 4
    
    return mediaSemestral
}

console.log(`A média semestral do Aluno é: ${calcNota(notas2Bimestre)}`) //7.25



