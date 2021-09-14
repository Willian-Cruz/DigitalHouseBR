function calculoimc(peso,altura){

    let imc = peso/(altura*altura);
    
    let classificação ="";
    
    if (imc < 18.5){
    
        classificacao = "abaixo do peso";
    
    }else if (imc>18.5 & imc <24.9){
    
        classificacao ="peso ideal";
    
    }else if (imc>124.9 & imc <29.9){
    
        classificacao ="acima do peso";
    
    }else if (imc >29.9 && imc < 32.5){
    
        classificacao ="muito acima do peso"
    
    }else if (imc >34.9 && imc < 39.9){
    
        classificacao ="obesidade2"
    
        console.log(classificacao);
    
    return classificacao
    }
}
    console.log(calculoimc(50,1))