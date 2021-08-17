interface AnimalInterface{
    name: string;
    color: string;
    correr();
    andar();
    comer();
}

class Animal implements AnimalInterface{
    constructor(public name: string, public color: string){
    }
    correr(){

    }
    andar(){

    }
    comer(){
        console.log('Comer do animal')
    }
}

class Coelho extends Animal{
    tamanhoOrelha: number;
    
    comer(){
        super.comer();
        console.log('Comer do Coelho');
    }
}
let coelho:Coelho = new Coelho("Coelho Leão Anão", "Branco");
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.correr();
coelho.comer();
