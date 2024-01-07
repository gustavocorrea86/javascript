function verificar(){
    var data = new Date()
    var atual = data.getFullYear()
    var img = document.querySelector('#imagem')
    var ano = document.querySelector('#iano')
    var sx = document.getElementsByName('sexo')
    var res = document.querySelector('#res')
    var tela = document.querySelector('#formulario')
    var genero = ' '
    ano = Number(ano.value)
    var idade = atual - ano
    if(ano == 0 || ano > atual){
        window.alert('[ERRO] Verifique o valor digitado!')
    }else if(sx[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){ // criança
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'// adulto
        }else if(idade <=20){
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'// adulto
         }else if(idade <=50){
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'
         }else{ // idoso
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'
         }
    }else{
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){ // criança
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'// adulto
        }else if(idade <=20){
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'// adulto
         }else if(idade <=50){
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'
         }else{ // idoso
            tela.style.height = '350px'
            img.src='imagens/noite.jpg'
         }
    }
    res.innerHTML = `<p> Detectamos um ${genero} com ${idade} anos </p>`
    res.appendChild(img)
}