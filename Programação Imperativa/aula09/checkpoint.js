function microondas(comida,tempo){
    if(comida == 1){
        console.log("Pipoca");
        console.log("Prato pronto!! Bom apetite!")
        tempoPadrao = 10;
    }else if(comida == 2){
        console.log("Macarrao");
        console.log("Prato pronto!! Bom apetite!")
        tempoPadrao = 8;
    }else if(comida == 3){
        console.log("Carne");
        console.log("Prato pronto!! Bom apetite!")
        tempoPadrao = 15;    
    }else if(comida == 4){
        console.log("Feijao");
        console.log("Prato pronto!! Bom apetite!")
        tempoPadrao = 12;
    }else if(comida == 5){
        console.log("Brigadeiro");
        console.log("Prato pronto!! Bom apetite!")
        tempoPadrao = 8;
    }else{
        console.log('prato inexistente.')
    }

    if((tempo > 2 * tempoPadrao) && (tempo <= 3 * tempoPadrao)){
        console.log("A comida queimou.")
        console.log("Prato pronto!! Bom apetite!")
    }else if(tempo < tempoPadrao){
        console.log("Tempo insuficiente.")

    }else if(tempo > 3 * tempoPadrao){
        console.log("Kabuum!")
    }
}
microondas(5,8)