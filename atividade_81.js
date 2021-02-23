let numeros =[1,2,3,4,5]

let quadrados = numeros.map(function(item){
    return Math.pow(item, 2); 
}); 

console.log(quadrados);