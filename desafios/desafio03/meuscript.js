function cont(){
    var i = document.querySelector('#inicio')
    var f = document.querySelector('#fim')
    var p = document.querySelector('#passo')
    var res = document.querySelector('#res')
    i = Number(i.value)
    f = Number(f.value)
    p = Number(p.value)
    if(f!=0 && i==0){
        i=0
    }
    if(i==0 && f==0 && p==0){
         window.alert('<<<[Erro]>>> Valor inválido')
    }else if(p==0){
         res.innerHTML = 'Impossível contar'
     }else if(i > f || p==0){
        // Contagem crescente
        p==1
        res.innerHTML = 'Contando: '
        for(var c = i; c >= f; c=c-p){
            res.innerHTML += `${c}\u{1f449}`
        }
    }else{
        //Contagem regressiva
        res.innerHTML = 'Contando: <br>'
        for(var c = i; c <= f; c=c+p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
}
    
