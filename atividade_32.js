const dataAtual = new Date();

const dataPostagem = new Date('2020-11-11T00:00');

//pegando o timestamp das datas 
const timeAtual = dataAtual.getTime(); 
const timePostagem = dataPostagem.getTime(); 

//verificar a diferença em milissegundos 
const diferenca = timeAtual - timePostagem;
//converter em horas 
const segundos = diferenca / 1000 ; 
const minutos = segundos / 60; 
const horas = minutos / 60; 

//Exibindo a diferença 
console.log(horas);