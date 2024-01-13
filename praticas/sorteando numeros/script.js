let valores = []
let itens = []

function sortear(){
    let numeros = document.querySelector('input#num')
    let sorteados = document.querySelector('div#res')
    let sorteando = document.querySelector('h3#sorteando')
    numeros = Number(numeros.value)
    if(numeros == 0 || numeros > 20){
        window.alert('Digite um número maior que 1 e menor que 20!')
        num.value =''
        num.focus()
    }else{
        sorteados.innerHTML =''
        itens = []
        sorteando.innerHTML = `Sorteando Números... `
        setTimeout (function(){ // fazendo deley
            for( let c = 0; c < numeros; c++){
                valores = (Math.floor(Math.random() * 20))
                itens.push(valores)   
                let mostrar = document.createElement('option')
                sorteando.innerHTML = `Números Sorteados: `
                mostrar.text = `Os valores são ${valores} nas posições [${c}]. `
                sorteados.appendChild(mostrar)
                num.value =''
                num.focus()   
        }},1000)
    }
}
function verificar(){
    let soma = 0
    let tela = itens.length
    let calc = document.querySelector('div#tela')
    calc.innerHTML = ''
    for( let cont in itens){
    soma = soma + itens[cont]
    }
    calc.innerHTML += `O vetor tem ${tela} posições. <br>`
    calc.innerHTML += `Os números que estão nos vetores são: ${itens}. <br>`
    calc.innerHTML += `A soma dos vetores é ${soma}. <br>`
    
    
    
  
    
    
   
}
