let estudantes = require('./alunos');
let estudos = require("./curso");

let aluno001 = new estudantes.AddAluno("Raphaela", 10, [4.5, 7, 9]);
let aluno002 = new estudantes.AddAluno("Paulo", 2, [3, 6.5, 8]);
let aluno003 = new estudantes.AddAluno("Aline", 16, [5, 7, 8]);
let aluno004 = new estudantes.AddAluno("Juliana", 1, [3.5, 4.7, 6]);
let aluno005 = new estudantes.AddAluno("Willian", 8, [6, 7, 8]);
let aluno006 = new estudantes.AddAluno("Felipe", 4, [6, 7, 8]);

console.log(aluno001);
console.log(aluno001.calcularMedia());
console.log(aluno001.calcularFaltas());

let listaEstudantes = [aluno001, aluno002, aluno003, aluno004, aluno005,aluno006];

module.exports = listaEstudantes;