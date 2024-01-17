var id = 67
console.log(`Sua idade é ${id}`)
if (id < 16){
    console.log('Não Vota!')
}else if (id < 18 || id > 65){
    console.log('Voto opcional')
}else{
    console.log('Voto Obrigatório')
}
console.log('Procure sua zona eleitoral para regularizar seu Titulo')