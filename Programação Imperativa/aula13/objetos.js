function Usuario (numeroConta, tipoConta, saldoConta, titularConta){
    this.numero = numeroConta
    this.tipo = tipoConta
    this.saldo = saldoConta
    this.titular = titularConta
}

var novoUsuario = new Usuario(5486273622, "Conta Corrente", 277.71, "Abigael Natte")
var novoUsuario1 = new Usuario(1183971869, "Conta Poupança", 867.50, "Ramon Connell")
var novoUsuario2 = new Usuario(9582019689, "Conta Poupança", 273.63, "Jarret Lafuente")
var novoUsuario3 = new Usuario(1761924656, "Conta Poupança", 324.15, "Ansel Ardley")
var novoUsuario4 = new Usuario(7401971607, "Conta Poupança", 187.89, "Jacki Shurmer")
var novoUsuario5 = new Usuario(630841470,	"Conta Corrente", 287.76, "Jobi Mawtus")
var novoUsuario6 = new Usuario(4223508636, "Conta Corrente", 21.77, "Thomasin Latour")
var novoUsuario7 = new Usuario(185979521,	"Conta Poupança", 259.94, "Lonnie Verheijden")
var novoUsuario8 = new Usuario(3151956165, "Conta Corrente", 76.01, "Alonso Wannan")
var novoUsuario9 = new Usuario(2138105881, "Conta Poupança", 331.96, "Bendite Huggett")


/* let lista = [];
lista.push(novoUsuario);
lista.push(novoUsuario1);
lista.push(novoUsuario2);
lista.push(novoUsuario3);
lista.push(novoUsuario4);
lista.push(novoUsuario5);
lista.push(novoUsuario6);
lista.push(novoUsuario7);
lista.push(novoUsuario8);
lista.push(novoUsuario9);
console.log(lista); */

/* 
let banco = [novoUsuario,
             novoUsuario1,
             novoUsuario2,
             novoUsuario3,
             novoUsuario4,
             novoUsuario5,
             novoUsuario6,
             novoUsuario7,
             novoUsuario8,
             novoUsuario9
            ]


for (let i = 0; i < banco.length; i++) {
    console.log(`O usuário ${banco[i]["titular"]} é titular da conta ${banco[i]["numero"]}, seu saldo é de R$: ${banco[i]["saldo"]}`)
}

 */