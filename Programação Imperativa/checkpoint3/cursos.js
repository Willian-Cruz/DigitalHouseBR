let listaEstudantes = require("./index");
let estudantes = require("./alunos");

let cursos = {
    nomeCurso: "Lógica de Programação",
    notaAprovacao: 7,
    faltasMaxima: 10,
    listaEstudantes: listaEstudantes,
    alunoNovo: function(aluno_,faltas_,notas_){
        this.listaEstudantes.push(new estudantes.AddAluno(aluno_,faltas_,notas_))
    },

    aprovacao: function(aluno_){
        if((aluno_.calcularMedia() >= this.notaAprovacao) && (aluno_.faltas < this.faltasMaxima)){
            return true;
        }else if ((aluno_.faltas === this.faltasMaxima) && (aluno_.calcularMedia() > this.notaAprovacao * 1.1)){
            return true;
        }else{
            return false;
        }
    },
    
    resultados: function (){
        let lista = [];
        for(let estudante of lista.listaEstudantes){
            lista.push(this.aprovacao(estudante));
        }
        return lista;
    }
};

let listaTrueFalse = cursos.resultados();

console.log(listaTrueFalse);

module.exports = cursos;