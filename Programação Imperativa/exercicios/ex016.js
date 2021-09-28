//Escreva um programa para gerar o invertido de um número com três algarismos (exemplo: o invertido de 498 é 894).

var numero = '498'
var invertido = numero.split('').reverse().join('');

console.log(invertido)