/*function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

getRandomInt(i, f){
    let i = 1
    let f = 10
    console.log(i,f)
}
*/
let max = 15
let f = 4
for( let c = 1; c <=f; c++){
    console.log(Math.floor(Math.random() * max));
}
