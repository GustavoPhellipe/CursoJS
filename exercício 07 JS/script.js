var texto = window.document.getElementById('itxt')
var select = window.document.getElementById('iselect')
var res = window.document.getElementById('resposta')
var valores = []

function Numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function Lista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function Verificar() {
    if(Numero(texto.value) && !Lista(texto.value, valores)) {
        valores.push(Number(texto.value))
        var item = document.createElement('option')
        item.text = `valor ${texto.value} adicionado.`
        select.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    texto.value = ''
    texto.focus()
}

function Finalizar() {
    if(valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
        
        if(valores[pos] > maior) 
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}