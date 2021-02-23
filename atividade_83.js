const inverteNomeSobrenome = (NomeSobrenome) => {
    const nome =  NomeSobrenome.split(' ');
    return (nome[0] + ' ' + nome[length-1]) ;
  }
  
  console.log( inverteNomeSobrenome("José Fernandes") );