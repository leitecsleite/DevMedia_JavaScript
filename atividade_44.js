const usuario = "Fabiana Teles";
const limiteChar = 10; 

const validaCampo = (usuario.length <= limiteChar) && true ; 

if (validaCampo) {
    console.log("Dados Válidos"); 
}else {
    console.log("O limite de caracteres é " + limiteChar); 
}