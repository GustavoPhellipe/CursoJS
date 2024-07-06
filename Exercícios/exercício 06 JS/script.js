function Click() {
    var texto = window.document.getElementById('itxt')
    var botao2 = window.document.getElementById('botao')
    var select = window.document.getElementById('itabuada')
    if(texto.value.length == 0) {
        window.alert('Ops... Tem algo de errado!')  
    }

    else {
        var numtxt = Number(texto.value)
        var c = 1
        select.innerHTML = ''
        while( c <= 10) {
            var item = document.createElement('option')
            item.text = `${numtxt} x ${c} = ${numtxt*c}`
            item.value = `tab${c}`
            select.appendChild(item)
            c++
        }
    }
}