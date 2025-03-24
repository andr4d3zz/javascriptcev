function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value) 
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
            if(idade == 0 && idade < 12) {
                img.setAttribute('src','criançah.xcf')
            } else if ( idade < 21) {
                img.setAttribute('src','jovemh.xcf')
            } else if (idade < 50) {
                adulto
                img.setAttribute('src','adultoh.xcf')
            } else {
                img.setAttribute('src', 'idosoh.xcf')
            }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
            if(idade == 0 && idade < 12) {
                criança
            } else if ( idade < 21) {
                Jovem
            } else if (idade < 50) {
                adulto
            } else {
                idoso
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
