function CriarUsuario (numeroConta, tipoConta, saldoConta, titularConta){
    this.numero = numeroConta
    this.tipo = tipoConta
    this.saldo = saldoConta
    this.titular = titularConta
}
var novoUsuario1 = new Usuario(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')

console.log(novoUsuario1.titularConta)