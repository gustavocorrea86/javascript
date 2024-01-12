let telanum = document.querySelector('#addnum')
        let num = document.querySelector('#num')
        let telavet = document.querySelector('#mostrar')
        valor = []
    function numero(n){
        if( Number(n) > 0 && Number(n) < 100){
            return true
        }else{
            return false
        }
    }
    function repetido(n, val){
        if(val.indexOf(Number(n)) == -1){
            return true
        }else{
            return false
        } 
    }
    function adicionar(){
       if ( numero(num.value) && repetido(num.value, valor)){
            valor.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado!`
            telanum.appendChild(item)
            num.value = ''
            num.focus()
        }else{
            num.value = ''
            num.focus()
            window. alert ('Digite um valor válido!')
        }
    }
    function finalizar(){
            let tela = valor.length
            let soma = 0
            let media = 0
            let maior = valor[0]
            let menor = valor [0]
            for(let s in valor){
                soma += valor[s]
                media = soma / valor.length
                if (valor[s] > maior)
                    maior = valor[s]
                if (valor[s] < menor)
                    menor = valor[s]
                
            }
            telavet.innerHTML = ''
            telavet.innerHTML += `Temos ${tela} posições cadastrados <br>`
            telavet.innerHTML += `A soma dos vetores é ${soma}<br>`
            telavet.innerHTML += `A média dos valores é ${media}<br>`
            telavet.innerHTML += `O Maior valor é ${maior} <br>`
            telavet.innerHTML += `O Menor valor é ${menor} <br>`
    }