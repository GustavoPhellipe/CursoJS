function carregar() {
    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if ( hora >= 0 && hora < 12) {
        msg2.innerText = 'Bom dia!'
        img.src = 'imagens/manhagimp.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18) {
        msg2.innerHTML = 'Boa tarde'
        img.src = 'imagens/tardegimp.png'
        document.body.style.background = '#b9866f'
    } else {
        msg2.innerHTML = 'Boa noite'
        img.src = 'imagens/noitegimp.png'
        document.body.style.background = '#515154'
    }
}