const palavra = (nome) => {
    let mensagem = "Seja bem-vindo(a) " + nome + "!";
    return mensagem;
}

let mensagem_usuario = palavra("Samantha");
console.log(mensagem_usuario);