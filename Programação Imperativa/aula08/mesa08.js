/* let sts = true

if (sts == true) {
    console.log('Valor é verdadeiro!')
}else{
    console.log('Valor é falso!')
} */

/* let linguagem = 'php'

if (linguagem == 'javascript') {
    console.log('Estou aprendendo!!!')
}else{
    console.log('Aprenderei mais tarde!!!')
} */

/* let idade = 18

console.log(idade < 18 ? 'É menor de idade': 'É maior de idade') */

let mes = 'Agosto'

switch (mes) {
    case 'Abril':
        console.log('Está chegando a páscoa!!')
    break;
    case 'Junho':
        console.log('Estamos no meio do ano!! Vai ter festa junina!!')
    break;

    case 'Dezembro':
        console.log('')
    break;
    default:
        console.log('Não terá nenhuma festividade!!')
        break;
}