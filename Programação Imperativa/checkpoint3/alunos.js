//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
//Crie um construtor para ele e importe-o como o módulo aluno.

let estudante = {
    aluno: function(nome_, faltas_, notas_){
    this.nome = nome_,
    this.faltas = faltas_,
    this.notas = notas_},
    media:function(aluno){
        let somaNotas = 0;
        for(let nota in aluno.notas){
            somaNotas = somaNotas + aluno.notas[nota];
        }
        let retorno = somaNotas
        return retorno;
    }
};

module.exports = aluno;
