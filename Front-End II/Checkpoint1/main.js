const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    const dados = Object.fromEntries(new FormData(form).entries())
    console.log(dados)
    e.preventDefault()
})
