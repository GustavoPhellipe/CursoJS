function Verificar() {
    var caixa = window.document.getElementById('icaixatxt')
    var data = new Date()
    var ano = data.getFullYear()
    var res = window.document.getElementById('res')

    if (caixa.value.length == 0 || caixa.value > ano) {
        window.alert(' [ERRO] Verifique se o ano está correto!')
    }

    else {
        var idade = ano - Number(caixa.value)
        var sexo = window.document.getElementsByName('sexo')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute( 'id', 'foto')
        if (sexo[0].checked) {
            gênero = 'Masculino'
            if ( idade >= 0 && idade < 12) {
                img.src = 'imagens/bebem.png'
            }
            else if (idade > 12 && idade <= 18) {
                img.src = 'imagens/garoto.png'
            }
            else if ( idade > 18 && idade < 50) {
                img.src = 'imagens/homem.png'
            }
            else if (idade > 50) {
                img.src = 'imagens/idoso.png'
            }
        }
        else if (sexo[1].checked) {
            gênero = 'Feminino'
            if ( idade >= 0 && idade < 12) {
                img.src = 'imagens/bebef.png'
            }
            else if (idade > 12 && idade <= 18) {
                img.src = 'imagens/garota.png'
            }
            else if ( idade > 18 && idade < 50) {
                img.src = 'imagens/mulher.png'
            }
            else if ( idade > 50) {
                img.src = 'imagens/idosa.png'
            }
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}