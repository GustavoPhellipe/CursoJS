function Verificar() {
    var inicio = window.document.getElementById('iinicio')
    var final = window.document.getElementById('ifinal')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')

    if ( inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if ( i < f)
        for ( var c = i ; c <= f ; c += p ) {
            res.innerHTML += `👉 ${c}` 
        }
        else {
            for( var c = i ; c >= f ; c -= p ) {
                res.innerHTML += `👉 ${c}`
            }
        }
    }
    res.innerHTML += '\u{1F3C1}'
}