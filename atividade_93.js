let numeros = [ 10,5, 7, 8, 9, 6, 12, 4]; 

let numeros_impares = 0; 
let total_pares = 0 ; 

let contador = 0; 

while (contador < numeros.length){
    if (numeros[contador] % 2 == 0){
        total_pares++; 
    }else {
        numeros_impares ++
    }

    contador ++; 
}

console.log("O total de numeros pares é : " + total_pares); 
console.log("O total de numero ímpares é : "+ numeros_impares); 