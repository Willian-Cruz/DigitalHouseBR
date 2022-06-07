const form = document.querySelector("#formulario")

form.addEventListener('submit', function(event){
    event.preventDefault()
})

// window.onload(alert('Página carregada!'));

const botoes = document.querySelectorAll('button')
botoes.forEach((botao) => {
    botao.addEventListener('mouseover', (cursor) => botao.style.backgroundColor = 'blue')
    botao.addEventListener('mouseout', (cursor) => botao.style.backgroundColor = 'white')
})

function handleClick(){
    console.log('Você clicou!')
}

