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
            <div class="loader"></div>
        </div>
        <div class="card__info">
            <h2 class="card__title">${titulo}</h2>
            <p class="card__description">${descricao}</p>
        </div>
    `

    document.querySelector('.card-grid').appendChild(div)
    buscarImg(imagem, titulo)
    div.addEventListener('click', () => {
        let parent = div.parentNode
        parent.removeChild(div)
    })
}

async function buscarImg(alt, titulo) {
    await fetch(`https://source.unsplash.com/30${counter}x30${counter}/?${titulo.toLowerCase()}`)
        .then(res => {
            let img = document.createElement('img')
            let loader = document.querySelector('.loader')
            let parent = loader.parentNode

            img.setAttribute("class", "card__img")
            img.src = res.url
            img.alt = alt
            
            parent.replaceChild(img, loader)
        })
}
