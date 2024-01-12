function gerar(){
    var n1 = document.querySelector('#numero')
    var res = document.querySelector('#res')
    n1 = Number(n1.value) 
    var c = ' '
    var r = n1 * c
    if(n1 == 0){
        window.alert('Digite um número!!!')
    }else{
        res.innerHTML = `Tabuada do "${n1}" <br>`
            for(var c = 0; c <=10; c++){
                res.style.display = `block`
                r = n1 * c 
                res.innerHTML += `${n1} x ${c} = ${r}`
                res.innerHTML +=`<br>`
            }
            var cor = 0
            
    }
    
}