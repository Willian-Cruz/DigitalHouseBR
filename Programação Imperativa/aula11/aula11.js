let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function passagemDeElementos(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].pop()
    }
    console.log(arr)
}

passagemDeElementos(filmes)

/* let arr = ["teste1","teste2","teste3"];

function converterMaisculas(array){
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  console.log(array);
}

converterMaisculas(arr) */
