const hoje = new Date();

//Imprimindo uma string com a data e a hora local
console.log(hoje.toLocaleDateString()); 
console.log(`\n`)

// Imprimindo uma String com a data armazenada
console.log(hoje.toString());
console.log(`\n`)
//Imprimindo uma string com a data universal (UTC)
console.log(hoje.toUTCString());
console.log(`\n`)
//Imprimindo timestamp
console.log(hoje.valueOf());
console.log(`\n`)

