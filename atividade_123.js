class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0; 
    }

    //Método de instância

    aumentarVolume(){
        this.volume += 2; 
    }
    diminuirVolume(){
        this.volume -= 2; 
    }

    //Método de estático
    static trocaPilha(){
        console.log('ok.vou trocar')
    }
}

const controle1 = new ControleRemoto('LG'); 

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocaPilha();

console.log(controle1);

console.log(ControleRemoto.trocaPilha());