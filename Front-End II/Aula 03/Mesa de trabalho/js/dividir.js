function dividir(num1, num2){
    if (num1 == 0 || num2 == 0){
        return 'Não é possível dividir por ZERO, escolha outro número'
    }else{
        return num1 / num2
    }
}


export default dividir;