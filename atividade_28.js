let expresso_proibida = "passaporte falso"; 

let comentario = "   Venda de PASSAPORTE FALSO"; 

comentario = comentario.trim(); 
comentario = comentario.toLowerCase(); 

if (comentario.lastIndexOf(expressao_proibida) > -1) {
    console.log("No seu comentário há palavras proibidas. Atualiza seu comentário novamente")
}else{
    console.log ("Seu Comentário foi aprovado"); 
}
console.log(comentario); // venda de passaporte falso 

nome.toUpperCase