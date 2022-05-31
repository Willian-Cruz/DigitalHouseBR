const urlImagens = [] 

const imagens = document.querySelectorAll("img");
const imagens_links = document.querySelectorAll(".img-link");

imagens.forEach((_, index) => {

const url = prompt(`Adicione o url para a imagem ${index + 1}`);

urlImagens.push(url);

});

urlImagens.forEach((url, index) => {

imagens[index].setAttribute("src", url)
imagens_links[index].setAttribute("href",url)
imagens_links[index].setAttribute("target","_blank")

})