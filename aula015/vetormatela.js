var valores = [8, 1, 7, 4, 6, 9, 2]

console.log(`${valores}`)
/*
for ( var pos=0 ; pos < valores.length ; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}