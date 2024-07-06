function Contar() {
    var inicio = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados!')
    }

    else {
        res.innerHTML = 'Contando: '
        var cxi = Number(inicio.value)
        var cxf = Number(fim.value)
        var cxp = Number(passo.value)

        if(cxi < cxf) {
            for( var c = cxi ; c < cxf ; c += cxp) {
                res.innerHTML  += `${c} \u{1F449}`
            }
        }
        else {
            for( var c = cxi ; c > cxf ; c -= cxp) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
