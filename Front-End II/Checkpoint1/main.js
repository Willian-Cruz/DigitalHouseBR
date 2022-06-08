let counter = 0

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const dados = Object.fromEntries(new FormData(form).entries())
    createCard(dados)
    counter += 1
})

// Card

function createCard({ titulo, descricao, imagem }) {
    const div = document.createElement('div')
    div.setAttribute("class", "card")
    div.innerHTML = `
        <div class="card_imgWrapper">
            <img 
                src="https://source.unsplash.com/30${counter}x30${counter}/?landscape" 
                alt="imagem aleatoria" title="${imagem}"
                class="card__img"
            >
        </div>
        <div class="card__info">
            <h2 class="card__title">${titulo}</h2>
            <p class="card__description">${descricao}</p>
        </div>
    `

    document.querySelector('.card-grid').appendChild(div)
}
