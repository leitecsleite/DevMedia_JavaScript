function validar(login, senha){
     if(login == 'Lucas' && senha == '123'){
          return true;
     }

     return false;
}

exports.valida = validar