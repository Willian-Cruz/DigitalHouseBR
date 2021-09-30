//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
//Crie um construtor para ele e importe-o como o módulo aluno.

function AddAluno(nome_, faltas_, notas_){
    this.nome = nome_,
    this.faltas = faltas_,
    this.notas = notas_,
    this.calcularMedia = () => {
        let media = this.notas.reduce((previousValue, currentValue) => previousValue + currentValue) / this.notas.lenght;
        return media;
    };
    this.calcularFaltas = () => this.faltas += 1;
};

module.exports = {
    AddAluno: AddAluno
};
