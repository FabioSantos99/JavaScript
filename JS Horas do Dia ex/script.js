function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
img.src = 'manhã.png'
document.body.style.background = '#EFE16B'
}else if (hora >= 12 && hora <18) {
document.body.style.background = '#DE1909'
}else {
img.src = 'Noite.png'
document.body.style.background = '#100212'
}
}