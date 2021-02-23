const remove_espacos = (texto) => {
    
return texto.trim();

}

let mensagem = "  Estou aprendendo JavaScript        ";

let resultado = remove_espacos(mensagem);

console.log(resultado);