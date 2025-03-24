function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data =  new Date()
    /*var hora = data.getHours()*/
    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if  (hora >= 0 && hora < 12) {
        img.src ='img/manhãn.png'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'img/tarder.png'
    } else {
        img.src = 'img/noiter.png'
    }
}
