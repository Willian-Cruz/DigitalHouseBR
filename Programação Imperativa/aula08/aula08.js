function podeSubir(altura, acompanhada){
   if(altura < 2.00 && altura >= 1.40){
       console.log("Acesso autorizado!")
   }else if ((altura >= 1.20) && (altura < 1.40)){
       if(acompanhada == true){
           console.log('Acesso permitido somente com acompanhante!')
       }else{
        console.log("Acesso negado!")
       }
   }else{
       console.log("Acesso negado!")
   }
}

console.log(podeSubir(1.39, false))