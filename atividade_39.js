const hoje = new Date();
const vencimento = new Date('2020-07-02');

let mensagem = "";


 {
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem);