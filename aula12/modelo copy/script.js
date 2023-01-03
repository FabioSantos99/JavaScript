function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 16
    msg.innerHTML  = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) { 
   //BOM DIA!
   img.src = 'manhã.png'
   document.body.style.background = '#d9ca90'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'Tarde.png'
        document.body.style.background = '#fc9507'
    }  else {
        img.src = 'Noite.png'
        document.body.style.background = '#1b0758'
    }

}