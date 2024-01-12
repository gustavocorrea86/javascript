let num = [4,5,1,8,6]
num.push(5) // add um elemento na ultima posiçao
num.sort() // coloca os elementos em ordem
console.log(`O vetor tem ${num.length} posições`)
/*
for (let pos = 0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){ // busca simplificada
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(7) // busca o elemento e mostra a posição
if(pos == -1){
    console.log (`O valor não foi encontrado`)
}else{
    console.log (`O valor 5 esta na posição ${pos}º`)
}

