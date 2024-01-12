// Funcões com retorno
function parimp(num){
    if (num % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
let res = parimp(24)
console.log(res)
// console.log(parimp(23)) // sem o uso de variaveis

//-------------------------------------------------------------------------------------

// Funcoes com Parametros Pre-Definidos
function soma(p1=0, p2=0){
    return p1 + p2
}
console.log(soma(12))

//-------------------------------------------------------------------------------------

//Passagem de Parametro para Variavel
let valor = function(x){
    return x * 2
}
console.log(valor(5))

//-------------------------------------------------------------------------------------
