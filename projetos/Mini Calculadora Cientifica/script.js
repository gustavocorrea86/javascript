let tela = document.querySelector('#tela')
    let resultado = []
    let aux = 0
    function limpa() {
        aux = ''
        resultado = []
        tela.innerHTML = ''
        document.querySelector('section').style.backgroundColor = 'rgb(18, 18, 56)';
    }
    function enter() {
        resultado.push(Number(aux))
        tela.innerHTML = ''
        aux = ''
    }
    function um() {
        tela.innerHTML += `1`
        aux = Number(tela.innerHTML)
    }
    function dois(){
        tela.innerHTML += `2`
        aux = tela.innerHTML
    }
    function tres(){
        tela.innerHTML +='3'
        aux = tela.innerHTML
    }
    function quatro(){
        tela.innerHTML += '4'
        aux = tela.innerHTML
    }
    function cinco(){
        tela.innerHTML += '5'
        aux = tela.innerHTML
    }
    function seis (){
        tela.innerHTML += '6'
        aux = tela.innerHTML
    }
    function sete(){
        tela.innerHTML += '7'
        aux = tela.innerHTML
    }
    function oito(){
        tela.innerHTML += '8'
        aux = tela.innerHTML
    }
    function nove(){
        tela.innerHTML += '9'
        aux = tela.innerHTML
    }
    function zero(){
        tela.innerHTML += '0'
        aux = tela.innerHTML
    }
    function zerozero(){
        tela.innerHTML += '00'
        aux = tela.innerHTML
    }
    function ponto(){
        tela.innerHTML += '.'
        aux = tela.innerHTML
    }
    function white(){
        document.querySelector('section').style.backgroundColor = 'white';
        document.querySelector('#tela').style.border ='2px solid black';
        document.getElementById('.linha1').style.border = '2px solid black';
    }
    function black(){
        document.querySelector('section').style.backgroundColor = 'black';
    }
    function magicColor(){
        setInterval(function(){
            function random(num){
                return Math.floor(Math.random() * (num + 1));
            }
            var rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
            document.querySelector('section').style.backgroundColor = rndColor;
        },100)
    }
    let soma = 0
    function adicao(){
        let soma = 0
        for (let c in resultado){
           soma = Number(resultado[c]) + Number(tela.innerHTML)
        }   
        tela.innerHTML = parseInt(soma)
        soma = 0
        setTimeout(function() {
            tela.innerHTML = ''
        },4000)
    }
    function subtracao(){
        for (let c in resultado){
            tela.innerHTML = Number(resultado[c]) - tela.innerHTML
        }   
    }
    let media
    function divisao() {
        for (let c in resultado){
           soma = soma + Number(resultado[c])
           media = soma / tela.innerHTML
        }   
        tela.innerHTML = (media)
        media = 0
        soma = 0
    }
    function multiplicacao() {
        for (let c in resultado){
            tela.innerHTML = Number(resultado[c]) * tela.innerHTML
        }   
    }
    function porcentagem() {
        for( let c in resultado) {
            tela. innerHTML = tela.innerHTML * (Number(resultado[c]) / 100)  
        }
        
    }
    
   
    