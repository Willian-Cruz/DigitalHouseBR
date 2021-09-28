/* Crie um array que contenha nomes de produtos para compra. 

Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)
 */

/* 
let itensDeLimpeza = ['Sabao','Detergente','Cloro']

itensDeLimpeza.push("Esponja")
console.log(itensDeLimpeza)

itensDeLimpeza.pop("Esponja")
console.log(itensDeLimpeza)

itensDeLimpeza.shift()
console.log(itensDeLimpeza)

itensDeLimpeza.unshift("Palha de aço","Alvejante")
console.log(itensDeLimpeza)

let addTraco =  itensDeLimpeza.join(" - ")
console.log(addTraco) */

function imprimirInverso(arr){
    let lista = ['Abacaxi' ,'Banana','Caju','Damasco','Figo','Guarana']
    let invertido = [lista[5],lista[4],lista[3],lista[2],lista[1],lista[0]]
    return invertido
}

console.log(imprimirInverso())

