var idade = 15
console.log(`Você tem ${idade}`)
if (idade < 16) {
    console.log('Não vota')
}
else {
    if (idade < 18 || idade > 65 ) {
        console.log('Voto opcional')
    }

    if (idade >= 18) {
        console.log('Voto obrigatório')
    }
    
}
