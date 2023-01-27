let texto = document.querySelector('.teste')
let ret = document.querySelector('.retiscencia')

function clicou(){
    texto.style.display = 'block';
    ret.style.visibility = 'hidden'
}
function esconder(){
    texto.style.display = 'none'
    ret.style.visibility = 'visible'
}