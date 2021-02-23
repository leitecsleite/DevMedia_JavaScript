const colecaoNomes = ["Alberto", "Alex", "Sandro", "Roberta"];

for (let indice = 0; indice < colecaoNomes.length; indice++) {
  const nomeMaiusculo = (colecaoNomes[indice].toUpperCase());
  
 const colecaoNomes[indice] = nomeMaiusculo;
}

console.log(colecaoNomes);
