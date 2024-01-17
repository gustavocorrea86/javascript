var now = new Date()
var h = now.getHours()
console.log(`Agora são ${h} horas`)
if(h < 12){
    console.log('Bom dia')
}else if (h <= 18){
    console.log('Boa tarde')
}else if(h < 22){
    console.log('Boa noite')
}else{
    console.log('Hora de dormir. Boa Noite. ')
}