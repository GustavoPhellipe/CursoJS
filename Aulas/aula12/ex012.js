var agora = new Date()
var hr = agora.getHours()
console.log(`Agora o horário é ${hr}:00 `)
if (hr < 12) {
    console.log('Bom dia!')
}
else {
    if (hr <= 18) {
        console.log('Boa tarde!')
    }
    else {
        console.log('Boa noite!')
    }
}
