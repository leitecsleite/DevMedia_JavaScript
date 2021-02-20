let linguagem = "JavaScript"; 
let stack = "Mobile"; 
let msg =""; 


switch (stack){
    case "back-end":
        console.log(`Estude node.js para programação ${stack} em ${linguagem}`,);
        break; 
    case  "frond-end":
        console.log(`Estude React para programação ${stack} em linguagem ${linguagem}`); 
        break; 
    case "Mobile" :
        console.log(`Estude React Nativa para programção ${stack} em linguagem ${linguagem}`); 
        break; 
    default:
        console.log(`Tecnologia indisponível para ${stack}`);   
        break; 
}